<template>
  <h1 class="my-5 fw-normal h3">請先{{ isRegForm ? '註冊' : '登入' }}</h1>

  <div class="form-floating" v-show="isRegForm">
    <input type="text" class="form-control" id="nickname" placeholder="NickName" v-model="nickname" />
    <label for="nickname">NickName</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" />
    <label for="email">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" />
    <label for="password">Password</label>
  </div>

  <div v-show="errorMessage" class="tw-text-xl tw-my-4 tw-text-red-500">{{ errorMessage }}</div>


  <button class="mt-4 w-100 btn btn-lg btn-primary" @click.prevent="userReg">
    點我{{ isRegForm ? '註冊' : '登入' }}
  </button>

  <button class="mt-4 w-100 btn btn-lg btn-secondary" @click.prevent="isRegForm = !isRegForm">
    {{ isRegForm ? '回到登入' : '還未註冊？' }}
  </button>
</template>

<script>
import apis from '../apis';
import { ref } from 'vue';

export default {
  props: {
    nickname: String,
    email: String,
    isLogin: Boolean
  },
  emits: ['update'],
  setup(props, { emit }) {
    // 切換表單狀態
    const isRegForm = ref(false);
    const password = ref('');

    // 顯示錯誤訊息
    const errorMessage = ref('');

    // 註冊或登入
    const userReg = () => {
      errorMessage.value = '';

      if (isRegForm.value) {
        // 註冊
        apis.userReg({
          nickname: props.nickname,
          email: props.email,
          password: password.value,
        })
          .catch(({ response }) => {
            errorMessage.value = response.data.message;
            window.setTimeout(() => { errorMessage.value = ''; }, 5000);
          })
          .then(res => {
            emit('update', {
              email: res.email,
              nickname: res.nickname,
              isLogin: true
            });
          });

      } else {
        // 登入
        apis.userLogin({
          email: props.email,
          password: password.value,
        })
          .catch(({ response }) => {
            errorMessage.value = response.data.message;
            window.setTimeout(() => { errorMessage.value = ''; }, 5000);
          })
          .then(res => {
            emit('update', {
              email: res.email,
              nickname: res.nickname,
              isLogin: true
            });
          });
      }
    };

    return {
      password,
      userReg,
      isRegForm,
      errorMessage,
    };
  },
};
</script>
