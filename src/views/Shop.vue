<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="container container-custom-width">
      <div class="row mt-4">
        <div class="col-12 col-xl-aside">
          <ul>
            <li><a href="#" @click.prevent="showAllProducts()">所有商品</a></li>
          </ul>
          <ul>
            商品類別
            <li v-for="(category, key) in products" :key="key">
              <a href="#" @click.prevent="showProducts(key)">
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>
        <ul class="row col-12 col-xl-main">
          <li
            v-for="item in currProducts"
            :key="item.id"
            class="col-12 col-sm-6 col-md-4 mb-5 product-card mx-0"
          >
            <div class="img-wrap ratio-wrap mb-3" style="--w: 276; --h: 230;">
              <a target="_blank" href="#"
                ><img
                  class="opacity-anim ratio"
                  alt="image of the product"
                  :src="getFakeImage()"
              /></a>
            </div>
            <div>
              <h3
                class="lh-md pt-2 fw-600 break-line-2 fs-sm text-secondary text-center
               card-product-name d-flex align-items-center justify-content-center"
              >
                {{ item.title }}
              </h3>
              <div
                class="mt-2 mb-3 d-flex align-items-center justify-content-center fw-500"
              >
                <span class="me-2 fs-sm" :class="getPriceStyle(item)"
                  ><span class="text-primary fw-300">NTD</span> $
                  {{ $filters.currency(item.price) }}</span
                >
                <span
                  v-if="item.price !== item.origin_price"
                  class="text-decoration-line-through text-deleted fs-7 fw-light"
                  >NTD $ {{ $filters.currency(item.origin_price) }}</span
                >
              </div>
              <div
                class="d-flex align-items-center justify-content-center icons"
              >
                <button type="button" class="btn btn-icon py-0 px-1">
                  <i class="bi bi-cart text-white fs-normal"></i>
                </button>
                <button type="button" class="btn btn-icon py-0 px-1">
                  <i class="bi bi-heart text-white fs-normal"></i>
                </button>
                <button type="button" class="btn btn-icon py-0 px-1">
                  <i class="bi bi-share text-white fs-normal"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currProducts: [],
      allProducts: [],
      products: {},
      product: {},
      isLoading: false,
      status: {
        loadingItem: '',
      },
      cart: {},
      coupon_code: '',
      form: {
        user: {
          name: '',
          emal: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  inject: ['pushMessage', 'isApiSuccess', 'categoryName', 'getFakeImage'],
  methods: {
    createOrder () {
      const api = this.$api + '/order';
      const order = this.form;
      this.isLoading = true;
      this.$http.post(api, { data: order }).then(response => {
        this.isLoading = false;
        this.pushMessage(response, '建立訂單');

        if (!this.isApiSuccess(response, api)) return;

        this.$router.push('/user/checkout/' + response.data.orderId);
      });
    },
    updateCart (item) {
      const api = this.$api + `/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };

      this.$http
        .put(api, { data: cart })
        .then(response => {
          this.isLoading = false;
          this.status.loadingItem = '';

          if (!this.isApiSuccess(response, api)) return;

          this.getCart();
        })
        .catch(error => {
          console.error('Failed to update cart. ', error);
        });
    },
    addToCart (id) {
      this.status.loadingItem = id;
      const api = this.$api + '/cart';
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(api, { data: cart })
        .then(response => {
          this.pushMessage(response, '加入購物車');
          this.status.loadingItem = '';
          this.getCart();
        })
        .catch(err => {
          console.error('Add to cart error: ', err);
        });
    },
    addCouponCode () {
      const api = this.$api + '/coupon';
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        this.getCart();
        this.pushMessage(response, '套用優惠券');
        this.isLoading = false;
      });
    },
    removeCartItem (id) {
      const api = this.$api + '/cart/' + id;
      this.status.loadingItem = id;
      this.isLoading = true;
      this.$http.delete(api).then(response => {
        this.status.loadingItem = '';
        this.isLoading = false;
        this.getCart();
        this.pushMessage(response, '刪除購物車品項');
      });
    },
    showProducts (category) {
      this.currProducts = this.products[category].data;
    },
    showAllProducts () {
      this.currProducts = this.allProducts;
    },
    getProducts () {
      const api = this.$api + '/products/all';
      this.isLoading = true;
      this.$http.get(api).then(response => {
        this.isLoading = false;
        this.allProducts = response.data.products;
        this.allProducts.forEach(item => {
          if (!(item.category in this.products)) {
            this.products[item.category] = {};
            this.products[item.category].data = [];
            const name = this.categoryName[item.category];
            this.products[item.category].name = name;
          }
          this.products[item.category].data.push(item);
        });
        this.currProducts = this.allProducts;
      });
    },
    getCart () {
      const api = this.$api + '/cart';
      this.isLoading = true;
      this.$http
        .get(api)
        .then(response => {
          this.isLoading = false;

          if (!this.isApiSuccess(response, api)) return;

          this.cart = response.data.data;
        })
        .catch(error => {
          console.error('ERROR! Cannot get cart data: ', error);
        });
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`);
    },
    getPriceStyle (item) {
      return item.price === item.origin_price
        ? 'text-subtitle'
        : 'text-strong-color';
    },
  },
  created () {
    this.getProducts();
    this.getCart();
  },
};
</script>
