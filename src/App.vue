<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { MouseMenuDirective, MouseMenuCtx } from '@howdyjs/mouse-menu';
// import HelloWorld from './components/HelloWorld.vue'
</script> -->





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
                        <el-menu-item>
                            <el-icon>
                                <Calendar />
                            </el-icon>
                            任务
                        </el-menu-item>
                    </RouterLink>
                    <RouterLink to="/log">
                        <el-menu-item>
                            <el-icon>
                                <Memo />
                            </el-icon>
                            日志
                        </el-menu-item>
                    </RouterLink>
                    <RouterLink to="/set">
                        <el-menu-item>
                            <el-icon>
                                <Setting />
                            </el-icon>
                            设置
                        </el-menu-item>
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
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { MouseMenuDirective, MouseMenuCtx } from '@howdyjs/mouse-menu';

export default defineComponent({
    data() {
        return {

        }
    },
    
})
</script>

<style scoped>
.common-layout {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.side {
    width: 8%;
    height: 100%;
}

.header {
    width: 100%;
    height: 5%;
}

.container {
    height: 95%;
}

.router-link-active {
    text-decoration: none;
    color: #fff;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>
