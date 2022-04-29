<template>
  <h1 class="mt-5 fw-normal h3">Hi {{ nickname }}, Welcome Todo List!</h1>
  <button class="mt-3 btn btn-info !tw-text-white" @click="$emit('logout')">登出</button>

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
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import apis from '../apis';

export default {
  props: {
    nickname: String,
  },
  components: {
    Icon,
  },
  emits: ['logout'],
  setup() {
    const content = ref('');
    const list = ref([]);

    // 取得列表
    apis.getList()
      .then(({ todos }) => {
        list.value = todos.map(d => ({ ...d, isEdit: false }));
      });

    // 新增
    const addItem = () => {
      apis.addItem(content.value)
        .then(d => {
          content.value = '';
          list.value.unshift({ ...d, isEdit: false });
        });
    };

    // 編輯
    const editItem = (item) => {
      const { id, content } = item;
      apis.editItem({ id, content })
        .then(d => {
          console.log(d);
          item.isEdit = false;
        });
    };

    // 刪除
    const removeItem = id => {
      apis.removeItem(id)
        .then(d => {
          list.value = list.value.filter(d => d.id !== id);
        })
    };

    // 切換完成狀態
    const toggleItem = item => {
      apis.toggleItem(item.id)
        .then(d => {
          item.completed_at = d.completed_at;
        })
    };

    return {
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