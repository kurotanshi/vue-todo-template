<template>
  <h1 class="my-5 fw-normal h3">請先註冊</h1>

  <div class="tw-my-10">
    <label for="nickname">NickName</label>
    <input type="text" class="form-control" id="nickname" placeholder="NickName" />
  </div>
  
  <div class="tw-my-10">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
  </div>
  
  <div class="tw-my-10">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" />
  </div>

  <div v-show="true" class="tw-text-xl tw-my-4 tw-text-red-500">錯誤訊息</div>


  <button class="mt-4 w-100 btn btn-lg btn-primary">
    點我註冊
  </button>

  <button class="mt-4 w-100 btn btn-lg btn-secondary">
    回到登入
  </button>
</template>

<script>
import apis from '../apis';

export default {
  setup() {

    return {

    };
  },
};
</script>
