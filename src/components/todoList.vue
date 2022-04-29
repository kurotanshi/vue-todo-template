<template>
  <h1 class="mt-5 fw-normal h3">Hi {{ nickname }}, Welcome Todo List!</h1>
  <button class="mt-3 btn btn-info !tw-text-white" @click="logout">登出</button>

  <div class="mt-5 tw-select-none">
    <input type="text" v-model.trim="content" class="tw-w-full tw-border tw-p-4" @keydown.enter="addItem"
      placeholder="input something...">

    <ul class="list-group tw-text-left">
      <li v-for="item in list" :key="item.id"
        class="list-group-item tw-relative tw-decoration !tw-p-4 hover:tw-bg-fuchsia-100">
        <div class="tw-p-2" v-if="!item.isEdit">
          <span @click.prevent="toggleItem(item)" class="tw-cursor-pointer">
            <Icon :icon="item.completed_at ? 'akar-icons:circle-check' : 'akar-icons:circle'"
              class="mb-1 tw-inline tw-text-2xl" />
            <span class="tw-ml-2" :class="item.completed_at ? 'tw-line-through' : ''">
              {{ item.content }}
            </span>
          </span>
        </div>
        <input class="tw-p-2 tw-w-4/5" v-else type="text" v-model.trim="item.content"
          @keydown.enter="editItem(item)">

        <span class="tw-absolute tw-right-4 tw-top-5">
          <button @click="item.isEdit = true" type="button" class="btn btn-secondary tw-mr-2">
            <Icon icon="bx:edit-alt" />
          </button>
          <button class=" btn btn-danger " @click="removeItem(item.id)">
            <Icon icon="fluent:delete-20-filled" />
          </button>
        </span>

      </li>
    </ul>

  </div>
</template>

<script>
import { inject } from 'vue';
import { Icon } from '@iconify/vue';
import { usetodoList } from '../compose';

export default {
  components: {
    Icon,
  },
  setup() {
    const $user = inject('$user');
    const { userInfo, logout } = $user;

    const $todoList = usetodoList();
    const { list, content, getList, addItem, editItem, removeItem, toggleItem } = $todoList;

    // 取得列表
    getList();

    return {
      nickname: userInfo.nickname,
      logout,
      content,
      list,
      addItem,
      editItem,
      removeItem,
      toggleItem
    }
  }
}
</script>