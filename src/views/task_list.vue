<!-- <script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script> -->


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
    <div v-for="item in children" :key="key" v-mouse-menu="{params: item, ...options}">
        <el-sub-menu v-if="item.have_child" :index="item.id" @click.stop="select(item)">
            <template #title>
                {{ item.title }}
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
                {{ item.title }}
            </el-menu-item>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MouseMenuDirective, MouseMenuCtx } from '@howdyjs/mouse-menu';

export default defineComponent({
    name: 'task_list',
    props: ['children', 'select', 'key', 'openeds'],
    data() {
        return {

        }
    },
    directives: {
        MouseMenu: MouseMenuDirective
    },
    setup() {
        const list = ref([]);

        return {
            list,
            options: {
                useLongPressInMobile: true,
                menuList: [
                    // {
                    //     label: (params: any) => `#${params.userName}`,
                    //     disabled: true
                    // },
                    {
                        label: '编辑',
                        tips: 'Edit',
                        fn: (row: any, ...args: []) => console.log('edit', row, args),
                    },
                    {
                        label: '停用',
                        tips: 'Stop',
                        fn: (row: any, ...args: []) => console.log('stop', row, args),
                    },
                    {
                        label: '删除',
                        tips: 'Delete',
                        fn: (row: any, ...args: []) => console.log('delete', row, args)
                    }
                ]
            }
        };
    }
})

</script>