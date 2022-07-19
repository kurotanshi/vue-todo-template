<template>
  <h1 class="mt-5 fw-normal h3">Hi 訪客, Welcome Todo List!</h1>
  <button class="mt-3 btn btn-info !tw-text-white">登出</button>

  <div class="mt-5 tw-select-none">
    <input type="text" v-model.trim="content" class="tw-w-full tw-border tw-p-4"
      placeholder="input something...">

    <ul class="list-group tw-text-left">
      <li v-for="item in 5" 
        :key="item"
        class="list-group-item tw-relative tw-decoration !tw-p-4 hover:tw-bg-fuchsia-100">
        <div class="tw-p-2">
          <span class="tw-cursor-pointer">
            <Icon icon="akar-icons:circle-check" class="mb-1 tw-inline tw-text-2xl" />
            <span class="tw-line-through tw-ml-2">
              標題標題標題標題標題標題
            </span>
          </span>
        </div>
        <!-- <input class="tw-p-2 tw-w-4/5" type="text"> -->

        <span class="tw-absolute tw-right-4 tw-top-5">
          <button type="button" class="btn btn-secondary tw-mr-2">
            <Icon icon="bx:edit-alt" />
          </button>
          <button class=" btn btn-danger ">
            <Icon icon="fluent:delete-20-filled" />
          </button>
        </span>

      </li>
    </ul>

  </div>
</template>

<script>
import { inject, ref } from 'vue';
import { Icon } from '@iconify/vue';
import apis from '../apis';

export default {
  components: {
    Icon,
  },
  setup() {
  }
}
</script>
