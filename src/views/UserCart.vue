<template>
  <Loading :active="isLoading"></Loading>
  <div class="container container-custom-width">
    <div class="row mt-4 pb-5">
      <ul class="col-md-12 col-lg-7">
        <li v-for="item in cart.carts" class="mb-4" :key="item.id">
          <!-- product title -->
          <div>
            <div class="break-line-10 text-primary">
              {{ item.product.title }}
            </div>
          </div>

          <!-- container of cart detail columns  -->
          <div class="row align-items-center">
            <!-- column of product image -->
            <div class="col">
              <div class="ratio-wrap" style="--w: 276; --h: 230;">
                <img
                  class="ratio"
                  alt="image of the product"
                  :src="item.product.imageUrl"
                />
              </div>
            </div>

            <!-- column of product price -->
            <div class="col">
              <div
                v-if="item.product.price !== item.product.origin_price"
                class="fs-6 fw-300 text-center"
              >
                <div class="d-inline-block label-2 py-1 me-2 mb-3 text-primary">
                  原價
                </div>
                <div
                  class="d-inline-block label-4
                    text-decoration-line-through text-deleted"
                >
                  $ {{ $filters.currency(item.product.origin_price) }}
                </div>
              </div>

              <div class="fs-6 fw-300 text-subtitle text-center">
                <div
                  class="d-inline-block label-2 py-1 me-2 mb-3
                border border-primary text-primary"
                >
                  特價
                </div>
                <div class="d-inline-block label-4">
                  $ {{ $filters.currency(item.product.price) }}
                </div>
              </div>
            </div>

            <!-- column of quantity -->
            <div class="col">
              <div class="row">
                <div
                  class="col flex-shrink-1 quantity-wrap
                    d-flex flex-column align-items-center"
                >
                  <div class="cart-item-num text-center mb-3">
                    {{ item.qty }}
                  </div>

                  <span class="mx-auto d-flex flex-nowrap">
                    <button
                      class="left-rounded fs-6 fw-light line-height-1
                        btn btn-outline-primary py-0 px-0 btn-link"
                      :disabled="item.qty <= 1"
                      @click="updateCart(item, item.qty - 1)"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                    <button
                      class="right-rounded fs-6 fw-light line-height-1
                      btn btn-outline-primary py-0 px-0 btn-link"
                      @click="updateCart(item, item.qty + 1)"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </span>
                </div>

                <div class="col d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-link fs-5"
                    :disabled="status.loadingItem === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            <!-- column of subtotal -->
            <div class="col">
              <div class="fs-6 fw-300 text-subtitle text-center">
                <div
                  class="d-inline-block label-3 py-1 me-2 mb-3
                border border-primary text-primary"
                >
                  小計
                </div>
                <div class="d-inline-block label-4">
                  $ {{ $filters.currency(item.total) }}
                </div>
              </div>

              <div class="fs-6 fw-300 text-subtitle text-center">
                <div
                  class="d-inline-block label-3 py-1 me-2 mb-2
                bg-primary text-white"
                >
                  折扣價
                </div>
                <div class="d-inline-block label-4">
                  $ {{ $filters.currency(item.final_total) }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="col-md-12 col-lg-5">
        <div class="bg-section h-100 ms-5 pt-6">
          <GappedDialog class="mx-auto mb-6" />

          <div class="row mb-4">
            <div class="col-1"></div>
            <div class="col-5 d-flex">
              <div class="text-white bg-label label-4 py-2 px-2">總計</div>
            </div>
            <div
              class="col-5 text-secondary align-middle d-flex
                align-items-center flex-row-reverse"
            >
              {{ $filters.currency(cart.total) }}
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-1"></div>
            <div class="col-5 d-flex">
              <div class="text-white bg-label label-4 py-2 px-2">折扣價</div>
            </div>
            <div
              class="col-5 text-secondary align-middle d-flex
                align-items-center flex-row-reverse"
            >
              {{ $filters.currency(cart.final_total) }}
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-1"></div>
            <div class="col-7 col-lg-5">
              <input
                type="text"
                class="border border-primary rounded-6 w-100 py-2 px-2 text-secondary"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
              />
            </div>

            <div class="col-3 col-lg-5 d-flex flex-row-reverse">
              <button
                class="btn btn-secondary text-white w-100"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <!-- end of the coupon row -->
          <div class="row mb-5 justify-content-center">
            <button
              class="btn btn-secondary text-white circle-2 bounce-anim
            rounded-circle d-flex align-items-center justify-content-center"
              @click="goToForm"
            >
              結帳
            </button>
          </div>
        </div>
        <!-- end of the summary section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$quantity-btn-height: 30px;
$quantity-btn-width: 30px;
$quantity-wrap-width: 130px;

.left-rounded,
.right-rounded {
  height: $quantity-btn-height;
  width: $quantity-btn-width;
}

.quantity-wrap {
  width: $quantity-wrap-width;
}
</style>

<script>
import GappedDialog from '@/components/GappedDialog.vue';

export default {
  data () {
    return {
      products: [],
      product: {},
      isLoading: false,
      status: {
        loadingItem: '',
      },
      cart: {},
      coupon_code: '',
    };
  },
  inject: ['pushMessage', 'isApiSuccess'],
  components: {
    GappedDialog,
  },
  methods: {
    updateCart (item, quantity) {
      const api = this.$api + `/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: quantity,
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
    getProducts () {
      const api = this.$api + '/products/all';
      this.isLoading = true;
      this.$http.get(api).then(response => {
        this.isLoading = false;
        this.products = response.data.products;
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
          console.log('測試: cart', this.cart);
        })
        .catch(error => {
          console.error('ERROR! Cannot get cart data: ', error);
        });
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`);
    },
    goToForm () {
      this.$router.push('/user/form');
    },
  },
  created () {
    this.getProducts();
    this.getCart();
  },
};
</script>
