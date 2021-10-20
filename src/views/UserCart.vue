<template>
  <Loading :active="isLoading"></Loading>
  <div class="container container-custom-width">
    <div class="row mt-4">
      <ul class="col-md-12 col-lg-8">
        <li
          v-for="item in cart.carts"
          :key="item.id"
          class="row align-items-center my-3"
        >
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

          <!-- column of product title -->
          <div class="col">
            <div class="break-line-10">
              {{ item.product.title }}
              <div class="text-info" v-if="item.coupon">已套用優惠券</div>
            </div>
          </div>

          <!-- column of product price -->
          <div class="col">
            <div
              v-if="item.product.price !== item.product.origin_price"
              class="text-decoration-line-through text-deleted
              fs-6 fw-300 text-center"
            >
              NTD $ {{ $filters.currency(item.product.origin_price) }}
            </div>
            <div class="fs-6 fw-300 text-subtitle text-center">
              <span class="text-primary">NTD</span> $
              {{ $filters.currency(item.product.price) }}
            </div>
          </div>

          <!-- column of quantity -->
          <div class="col d-flex align-items-center">
            <div class="cart-item-num text-center">{{ item.qty }}</div>

            <div class="d-flex">
              <button
                class="left-rounded fs-4 fw-light btn btn-outline-primary py-0 btn-link"
                :disabled="item.qty <= 1"
                @click="updateCart(item, item.qty - 1)"
              >
                <i class="bi bi-dash"></i>
              </button>
              <button
                class="right-rounded fs-4 fw-light btn btn-outline-primary py-0 btn-link"
                @click="updateCart(item, item.qty + 1)"
              >
                <i class="bi bi-plus"></i>
              </button>
              <button
                type="button"
                class="btn btn-link fs-5 ms-3"
                :disabled="status.loadingItem === item.id"
                @click="removeCartItem(item.id)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>

          <!-- column of subtotal -->
          <div class="col">
            <div class="fs-6 fw-300 text-subtitle text-center">
              <span class="text-primary">NTD</span> $
              {{ $filters.currency(item.total) }}
            </div>
            <div class="text-center">
              <div v-if="item.final_total !== item.total" class="text-info">
                折扣價：
              </div>
              <div class="fs-6 fw-300 text-subtitle text-center">
                <span class="text-primary">NTD</span> $
                {{ $filters.currency(item.final_total) }}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="col-md-12 col-lg-4">
        <div class="bg-section h-100 ms-5 pt-6">
          <GappedDialog class="mx-auto mb-6" />

          <div class="row mb-4">
            <div class="col-1"></div>
            <div class="col-4 d-flex">
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
            <div class="col-4 d-flex">
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
            <div class="col-4">
              <input
                type="text"
                class="border border-primary rounded-6 input-5 py-2 px-2 text-secondary"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
              />
            </div>

            <div class="col-5 d-flex flex-row-reverse">
              <button
                class="btn btn-secondary text-white"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <!-- end of the coupon row -->
        </div>
        <!-- end of the summary section -->
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-5">
        <div class="">
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
                        @change="updateCart(item, item.qty)"
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

    <div class="row">
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
    </div>
  </div>
</template>

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
