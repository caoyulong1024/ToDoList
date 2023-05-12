<script setup lang="ts">
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script>


<template>
    <!-- <el-sub-menu index="1">
                <template #title>
                    主线任务
                </template>
                <el-menu-item>Option 1</el-menu-item>
                <el-menu-item>Option 2</el-menu-item>
                <el-menu-item>Option 3</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    支线任务
                </template>
                <el-menu-item>
                    123
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item>test</el-menu-item> -->
    <template v-for="item in children" :key="key">
        <el-sub-menu v-if="item.have_child" :index="item.id" @click.stop="select(item)">
            <template #title>
                {{ item.text }}
            </template>
            <div @click.stop>
                <el-menu-item v-if="!item.get_child">
                    <el-icon class="is-loading">
                        <Loading />
                    </el-icon>
                    加载中
                </el-menu-item>
            </div>
            <task_list v-if="item.get_child" :key="key" :openeds="openeds" :children="item.children" :select="select">
            </task_list>
        </el-sub-menu>
        <div @click.stop>
            <el-menu-item v-if="!item.have_child" :index="item.id" @click="select(item)">
                {{ item.text }}
            </el-menu-item>
        </div>

    </template>
</template>

<script lang="ts">
export default {
    name: 'task_list',
    props: ['children', 'select', 'key', 'openeds'],
    data() {
        return {
            
        }
    },
}

</script>