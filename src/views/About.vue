<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test">fedtwe</button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  methods: {
    test() {
      Toast('提示信息');
    }
  }
}
</script>