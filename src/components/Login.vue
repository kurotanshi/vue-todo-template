<template>
  <h1 class="my-5 fw-normal h3">請先{{ isRegForm ? '註冊' : '登入' }}</h1>

  <div class="form-floating" v-show="isRegForm">
    <input type="text" class="form-control" id="nickname" placeholder="NickName"
      v-model="userInfo.nickname" />
    <label for="nickname">NickName</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control" id="email" placeholder="name@example.com"
      v-model="userInfo.email" />
    <label for="email">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" />
    <label for="password">Password</label>
  </div>

  <div v-show="errorMessage" class="tw-text-xl tw-my-4 tw-text-red-500">{{ errorMessage }}</div>


  <button class="mt-4 w-100 btn btn-lg btn-primary" @click.prevent="loginBtnHandler">
    點我{{ isRegForm ? '註冊' : '登入' }}
  </button>

  <button class="mt-4 w-100 btn btn-lg btn-secondary" @click.prevent="isRegForm = !isRegForm">
    {{ isRegForm ? '回到登入' : '還未註冊？' }}
  </button>
</template>

<script>
import { ref, inject } from 'vue';

export default {
  setup() {
    const $user = inject('$user');
    const { userInfo, login, userReg, errorMessage } = $user;

    // 切換表單狀態
    const isRegForm = ref(false);
    const password = ref('');

    // 註冊或登入
    const loginBtnHandler = () => {
      errorMessage.value = '';

      if (isRegForm.value) {
        // 註冊
        userReg(userInfo.nickname, userInfo.email, password.value);
      } else {
        // 登入
        login(userInfo.email, password.value);
      }
    };

    return {
      userInfo,
      password,
      loginBtnHandler,
      isRegForm,
      errorMessage,
    };
  },
};
</script>
