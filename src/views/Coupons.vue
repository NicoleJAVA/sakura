<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <couponModal
      :coupon="tempCoupon"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
  </div>
</template>

<script>
import couponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DeleteModal.vue';

export default {
  components: {
    couponModal,
    DelModal,
  },
  props: {
    config: Object,
  },
  inject: ['pushMessage', 'isApiSuccess'],
  data () {
    return {
      coupon: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  methods: {
    updateCoupon (tempCoupon) {
      let api = this.$api + '/admin/coupon';
      let httpMethod = 'post';

      if (!this.isNew) {
        api += '/' + this.tempCoupon.id;
        httpMethod = 'put';
      }

      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempCoupon }).then(response => {
        this.isLoading = false;
        this.getCoupons();
        this.pushMessage(response, '更新優惠券');
        this.$refs.couponModal.hideModal();
      });
    },
    delCoupon () {
      const api = this.$api + '/admin/coupon/' + this.tempCoupon.id;
      this.isLoading = true;
      this.$http.delete(api).then(response => {
        this.isLoading = false;
        this.pushMessage(response, '刪除優惠券');
        this.$refs.delModal.hideModal();
        this.getCoupons();
      });
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }

      this.$refs.couponModal.showModal();
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item };
      const delModal = this.$refs.delModal;
      delModal.showModal();
    },
    getCoupons () {
      const api = this.$api + '/admin/coupons';
      this.isLoading = true;
      this.$http.get(api).then(response => {
        this.isLoading = false;
        if (!this.isApiSuccess(response)) return;

        this.coupons = response.data.coupons;
      });
    },
  },
  created () {
    this.getCoupons();
  },
};
</script>
