<template>
  <main class="text-center tw-relative tw-min-h-[80vh]">
    <img class="mx-auto mb-4 tw-block tw-w-2/5"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEuMTMgMzcuMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN5ry45bGkXzUxMik7fS5jbHMtMntmaWxsOiMxYTFhMWE7fS5jbHMtM3tmaWxsOnVybCgj5pyq5ZG95ZCN5ry45bGkXzU4MSk7fS5jbHMtNHtmaWxsOnVybCgj5pyq5ZG95ZCN5ry45bGkXzU3Myk7fS5jbHMtNXtmaWxsOnVybCgj5pyq5ZG95ZCN5ry45bGkXzU1OSk7fS5jbHMtNntmaWxsOnVybCgj5pyq5ZG95ZCN5ry45bGkXzUxMi0yKTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IuacquWRveWQjea8uOWxpF81MTIiIHgxPSIyOC42NCIgeTE9Ii0xLjA4IiB4Mj0iNTQuNiIgeTI9IjI0Ljg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTk1NzUwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjA5NTgwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IuacquWRveWQjea8uOWxpF81ODEiIHgxPSIyMy45NCIgeTE9IjguNzMiIHgyPSI0NS43MyIgeTI9IjMwLjUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTczMzJlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWQ3YzZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IuacquWRveWQjea8uOWxpF81NzMiIHgxPSIyOS4zMSIgeTE9IjE0LjQxIiB4Mj0iMjkuMzEiIHkyPSItMC44IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjE5ZDk2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWI3MDYzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IuacquWRveWQjea8uOWxpF81NTkiIHgxPSI1MS44NCIgeTE9IjEzLjg2IiB4Mj0iNTEuODQiIHkyPSIwLjY1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjAxIiBzdG9wLWNvbG9yPSIjZjZjMGJkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWY5MThiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IuacquWRveWQjea8uOWxpF81MTItMiIgeDE9IjQwLjgyIiB5MT0iMTQuMzQiIHgyPSI1Mi41MyIgeTI9IjI2LjA1IiB4bGluazpocmVmPSIj5pyq5ZG95ZCN5ry45bGkXzUxMiIvPjwvZGVmcz48ZyBpZD0iTE9HT1/oqK3oqIgiIGRhdGEtbmFtZT0iTE9HTyDoqK3oqIgiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1Ni43IDAuNTQgNDAuNTcgMC41NCAyNC40NCAwLjU0IDE4LjA1IDEzLjQ0IDQwLjU3IDM3LjI4IDYzLjExIDEzLjQ0IDU2LjcgMC41NCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjMzLDExLjQ3VjYuNjRhNi40NSw2LjQ1LDAsMCwwLTEuODYtNC44QTYuODIsNi44MiwwLDAsMCw2OS41OCwwSDY1LjE5VjUuMThINjlhMiwyLDAsMCwxLDIuMTYsMi4xNHY1LjMxYTUuMTksNS4xOSwwLDAsMCwxLjQ2LDMuODgsNy41OSw3LjU5LDAsMCwwLDMuOSwxLjgsNy41MSw3LjUxLDAsMCwwLTMuOSwxLjc5QTUuMjEsNS4yMSwwLDAsMCw3MS4xNywyNFYyOS4zQTIsMiwwLDAsMSw2OSwzMS40M0g2NS4xOXY1LjE2aDQuMzlhNi44Miw2LjgyLDAsMCwwLDQuODktMS44MkE2LjQ1LDYuNDUsMCwwLDAsNzYuMzMsMzBWMjUuMTRjMC0yLjY2LDEuNDItNC4yLDQuNDMtNC4yVjE1LjY3Qzc3Ljc1LDE1LjY3LDc2LjMzLDE0LjE0LDc2LjMzLDExLjQ3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEwLDEyLjYzVjcuMzJhMiwyLDAsMCwxLDIuMTYtMi4xNGgzLjgyVjBIMTEuNTZhNi44Myw2LjgzLDAsMCwwLTQuOSwxLjgyLDYuNDUsNi40NSwwLDAsMC0xLjg1LDQuOHY0LjgzYzAsMi42Ny0xLjQzLDQuMi00LjQ0LDQuMnY1LjI3YzMsMCw0LjQ0LDEuNTQsNC40NCw0LjJWMzBhNi40NSw2LjQ1LDAsMCwwLDEuODUsNC44LDYuODMsNi44MywwLDAsMCw0LjksMS44Mmg0LjM4VjMxLjQzSDEyLjEyQTIsMiwwLDAsMSwxMCwyOS4zVjI0QTUuMjEsNS4yMSwwLDAsMCw4LjUsMjAuMWE3LjUxLDcuNTEsMCwwLDAtMy45LTEuNzksNy41OSw3LjU5LDAsMCwwLDMuOS0xLjhBNS4xOSw1LjE5LDAsMCwwLDEwLDEyLjYzWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIxOC4wNSAxMy40NCA0MC41NyAzNy4yOCA0MC41NyAxMy40NCAxOC4wNSAxMy40NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI0MC41NyAwLjU0IDI0LjQ0IDAuNTQgMTguMDUgMTMuNDQgNDAuNTcgMTMuNDQgNDAuNTcgMC41NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSI2My4xMSAxMy40NCA1Ni43IDAuNTQgNDAuNTcgMC41NCA0MC41NyAxMy40NCA2My4xMSAxMy40NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNiIgcG9pbnRzPSI0MC41NyAxMy40NCA0MC41NyAzNy4yOCA2My4xMSAxMy40NCA0MC41NyAxMy40NCIvPjwvZz48L3N2Zz4="
      alt="logo" />

    <Login v-if="!userInfo.isLogin" />
    <Todo v-else />

  </main>
  <p class="tw-w-full tw-absolute tw-text-center tw-bottom-4">&copy; 5xRuby 2022</p>
</template>

<script>
import { reactive } from 'vue';
import apis from './apis';
import Login from './components/Login.vue';
import Todo from './components/todoList.vue';

export default {
  components: {
    Login,
    Todo
  },
  setup() {
    const userInfo = reactive({
      isLogin: false,
      nickname: '',
      email: '',
    });

    const updateInfo = member => {
      userInfo.isLogin = member.isLogin;
      userInfo.nickname = member.nickname;
      userInfo.email = member.email;
    }

    // 預先檢查並登入
    (async () => {
      if (window.localStorage.getItem('token')) {
        const { email, nickname } = await apis.userLogin({});
        userInfo.email = email;
        userInfo.nickname = nickname;
        userInfo.isLogin = true;
      }
    })();

    // 登出
    const logout = () => {
      apis.userLogout()
        .then(d => {
          window.localStorage.removeItem('token');
          userInfo.isLogin = false;
        });
    };

    return {
      userInfo,
      updateInfo,
      logout
    };

  }
}
</script>