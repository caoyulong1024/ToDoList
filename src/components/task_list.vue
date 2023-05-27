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
    <div v-for="item in children" :key="key" >
        <el-sub-menu v-if="item.have_child" :index="item.id" @click.stop="select(item)" @contextmenu.prevent.stop v-mouse-menu="{ params: item, ...options }">
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
            <task_list v-if="item.get_child" :key="key" :openeds="openeds" :children="item.children" :select="select" :add_child="add_child" @add_child="add_child" :add_bro="add_bro" @add_bro="add_bro">
            </task_list>
        </el-sub-menu>
        <div @click.stop>
            <el-menu-item v-if="!item.have_child" :index="item.id" @click="select(item)" @contextmenu.prevent.stop v-mouse-menu="{ params: item, ...options }">
                {{ item.title }}
            </el-menu-item>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits } from 'vue';
import { MouseMenuDirective, MouseMenuCtx } from '@howdyjs/mouse-menu';

export default defineComponent({
    name: 'task_list',
    props: ['children', 'select', 'key', 'openeds', 'add_child', 'add_bro'],
    emits: ['add_child', 'add_bro'],
    data() {
        return {

        }
    },
    methods: {
        // add_child(item: any) {
        //     item.have_child = true;
        //     // 还是得先传到后端拿一个id才行，还是直接从后端拿json吧
        //     item.children.push();
        // },

    },
    directives: {
        MouseMenu: MouseMenuDirective
    },
    setup(props, context) {
        const list = ref([]);
        return {
            list,
            options: {
                useLongPressInMobile: true,
                menuWrapperCss: {
                    background: '#fafbfc',
                    borderRadius: '5px',
                    boxShadow: '0 1px 5px #cdcdcd',
                    width: '150px'
                },
                menuItemCss: {
                    height: '40px',
                },
                menuList: [
                    {
                        label: (item: any) => `${item.title}`,
                        disabled: true
                    },
                    {
                        line: true
                    },
                    {
                        label: '新增',
                        tips: 'new',
                        children: [
                            {
                                label: '同层级',
                                // tips: 'Open',
                                fn: (item: any, ...args: []) => {
                                    context.emit('add_bro', item);
                                }
                            },
                            {
                                label: '子层级',
                                // tips: 'Open',
                                fn: (item: any, ...args: []) => {
                                    context.emit('add_child', item);
                                }
                            },
                        ]
                    },
                    {
                        label: '删除',
                        tips: 'Delete',
                        fn: (item: any, ...args: []) => {
                            console.log(context);
                            console.log('delete', item, args)
                        }
                    }
                ]
            }
        };
    }
})

</script>