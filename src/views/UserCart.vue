<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="height: 100px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del class="h6" v-if="item.price"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div class="h5" v-if="item.price">
                  現在只要 {{ item.price }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger position-relative"
                    :disabled="status.loadingItem === item.id"
                    @click="addToCart(item.id)"
                  >
                    <div :class="{ invisible: status.loadingItem === item.id }">
                      加到購物車
                    </div>
                    <div
                      class="position-absolute w-100"
                      :class="{ invisible: status.loadingItem !== item.id }"
                      style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
                    >
                      <div
                        class="spinner-border spinner-border-sm text-danger"
                        role="status"
                      ></div>
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="status.loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        :disabled="status.loadingItem === item.id"
                        @change="updateCart(item)"
                        min="1"
                        v-model.number="item.qty"
                      />
                      <div class="input-group-text">
                        / {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="">
        <div class="btn btn-primary" @click="goToForm">前往結帳</div>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
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
