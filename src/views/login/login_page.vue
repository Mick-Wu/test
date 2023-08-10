<template>
  <div class="login-box">
    <h2>Login</h2>
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: { LoginPanel },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/image/login-bg.svg');
}
</style>
