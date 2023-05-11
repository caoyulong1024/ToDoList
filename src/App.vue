<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import task_main from './views/task_main.vue'
</script>





<!-- <template> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
<!-- </template> -->


<template>
    <div class="common-layout">
        <el-header class="header">Header</el-header>

        <el-container class="container">
            <el-aside class="side">
                <el-menu>
                    <RouterLink to="/">
                        <el-menu-item>任务</el-menu-item>
                    </RouterLink>
                    <RouterLink to="/log">
                        <el-menu-item>日志</el-menu-item>
                    </RouterLink>
                    <RouterLink to="/set">
                        <el-menu-item>设置</el-menu-item>
                    </RouterLink>

                </el-menu>
            </el-aside>


            <el-container>
                <!-- <task_main /> -->
                <RouterView />
            </el-container>
        </el-container>
    </div>
</template>



<script lang="ts">
export default {
    data() {
        return {
            count: 0,
        }
    }
}
</script>

<style scoped>
.common-layout {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.side {
    width: 10%;
    height: 100%;
}

.header {
    width: 100%;
    height: 5%;
}

.container {
    height: 95%;
}
</style>
