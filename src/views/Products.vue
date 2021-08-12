<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      新增一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DeleteModal
    ref="deleteModal"
    :item="tempProduct"
    @del-item="deleteProduct"
  ></DeleteModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },

  components: {
    ProductModal,
    DeleteModal,
  },

  inject: ['pushMessage'],

  methods: {
    getProducts () {
      const api = this.$api + '/admin/products';
      this.isLoading = true;

      this.$http.get(api).then(response => {
        this.isLoading = false;

        if (!response.data.success) {
          console.warn('Failed to get products:', response.data.message);

          return;
        }

        this.products = response.data.products;
        this.pagination = response.data.pagination;
      });
    },

    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },

    updateProduct (item) {
      this.tempProduct = item;
      let api = this.$api + '/admin/product';
      if (!this.isNew) api += `/${item.id}`;
      const httpMethod = this.isNew ? 'post' : 'put';

      this.$http[httpMethod](api, { data: this.tempProduct }).then(response => {
        this.getProducts();
        this.pushMessage(response, '更新');
      });
    },

    openDeleteModal (item) {
      this.tempProduct = item;
      const deleteProductModal = this.$refs.deleteModal;
      deleteProductModal.showModal();
    },

    deleteProduct () {
      const api = this.$api + '/admin/product/' + this.tempProduct.id;
      this.$http.delete(api).then(response => {
        const deleteModal = this.$refs.deleteModal;
        deleteModal.hideModal();
        this.getProducts();
      });
    },
  },

  created () {
    this.getProducts();
  },
};
</script>
