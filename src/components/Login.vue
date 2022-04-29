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
import { ref, computed } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();

    // 切換表單狀態
    const isRegForm = ref(false);
    // 密碼
    const password = ref('');

    const email = computed({
      get: () => store.state.userInfo.email,
      set: val => store.commit('updateUserEmail', val)
    });
    const nickname = computed({
      get: () => store.state.userInfo.nickname,
      set: val => store.commit('updateUserNickname', val)
    });

    // 顯示錯誤訊息
    const errorMessage = computed({
      get: () => store.state.errorMessage,
      set: val => store.commit('updateErrorMessage', val)
    });


    // 註冊或登入
    const userReg = () => {
      errorMessage.value = '';

      if (isRegForm.value) {
        // 登入
        store.dispatch('userReg', {
          nickname: nickname.value,
          email: email.value,
          password: password.value,
        });
      } else {
        // 登入
        store.dispatch('userLogin', {
          email: email.value,
          password: password.value,
        });
      }
    };

    return {
      email,
      nickname,
      password,
      userReg,
      isRegForm,
      errorMessage,
    };
  },
};
</script>
