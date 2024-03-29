<template>
  <Loading :active="isLoading"></Loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openOrderModal(false, item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"
  ></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>

<script>
import DelModal from '../components/DeleteModal';
import Pagination from '../components/Pagination';
import OrderModal from '../components/OrderModal';

export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  inject: ['pushMessage'],
  methods: {
    updatePaid (item) {
      const api = this.$api + '/admin/order/' + item.id;
      const paid = {
        is_paid: item.is_paid,
      };
      this.isLoading = true;
      this.$http
        .put(api, { data: paid })
        .then(response => {
          this.isLoading = false;
          this.getOrders();
          this.pushMessage(response, '更新付款狀態');
        })
        .catch(error => {
          console.error('Falied to update payment status', error);
        });
    },
    delOrder () {
      const api = this.$api + '/admin/order/' + this.tempOrder.id;
      this.isLoading = true;
      this.$http
        .delete(api)
        .then(response => {
          this.isLoading = false;
          this.getOrders();
          this.pushMessage(response, '刪除訂單');
          this.$refs.delModal.hideModal();
        })
        .catch(error => {
          console.error('Failed to delete order. ', error);
        });
    },
    getOrders (currentPage = 1) {
      this.currentPage = currentPage;
      const api = this.$api + `/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(api).then(response => {
        this.isLoading = false;
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
      });
    },
    openOrderModal (isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderModal = this.$refs.orderModal;
      orderModal.showModal();
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item };
      const delModal = this.$refs.delModal;
      delModal.showModal();
    },
  },
  created () {
    this.getOrders();
  },
};
</script>
