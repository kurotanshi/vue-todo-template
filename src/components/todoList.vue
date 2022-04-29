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
          <span @click.prevent="toggleItem(item.id)" class="tw-cursor-pointer">
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
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import apis from '../apis';
import { useStore } from 'vuex'

export default {
  props: {
    nickname: String,
  },
  components: {
    Icon,
  },
  emits: ['logout'],
  setup() {
    const store = useStore();
    const content = ref('');
    const list = computed(() => store.state.todoList);

    const logout = () => store.dispatch('logout');

    // 取得列表
    store.dispatch('getList');

    // 新增
    const addItem = async () => {
      await store.dispatch('addItem', content.value);
      content.value = '';
    };

    // 編輯
    const editItem = async item => {
      await store.dispatch('editItem', item);
    };

    // 刪除
    const removeItem = async id => {
      await store.dispatch('removeItem', id);
    };

    // 切換完成狀態
    const toggleItem = async id => {
      await store.dispatch('toggleItem', id);
    };

    return {
      content,
      list,
      logout,
      addItem,
      editItem,
      removeItem,
      toggleItem
    }
  }
}
</script>
