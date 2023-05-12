<script setup lang="ts">
import task_list from './task_list.vue'
</script>

<template>
    <el-scrollbar class="task_side">
        <el-menu :default-openeds="openeds">
            <task_list :key="key" :openeds="openeds" :children="data" :select="select" />
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
var data = [
    {
        id: '1',
        title: '主线',
        text: '',
        award: {},
        state: 'running',
        have_child: true,
        get_child: false,
        show: false,
        parent: 'root',
        start_time: '',
        finish_time: '',
        plan_time: '',
        children: [
            {
                id: '5',
                title: '主线',
                text: '',
                award: {},
                state: 'running',
                have_child: true,
                get_child: false,
                show: false,
                parent: '1',
                start_time: '',
                finish_time: '',
                plan_time: '',
                children: [
                    {
                        id: '6',
                        title: 'test',
                        text: '',
                        award: {},
                        state: 'running',
                        have_child: false,
                        get_child: false,
                        show: false,
                        parent: 'root',
                        start_time: '',
                        finish_time: '',
                        plan_time: '',
                        children: [],
                    },
                ],
            }
        ]
    },
    {
        id: '2',
        title: '支线',
        text: '',
        award: {},
        state: 'running',
        have_child: false,
        get_child: false,
        show: false,
        parent: 'root',
        start_time: '',
        finish_time: '',
        plan_time: '',
        children: [],
    },
    {
        id: '3',
        title: '每日任务',
        text: '',
        award: {},
        state: 'running',
        have_child: false,
        get_child: false,
        show: false,
        parent: 'root',
        start_time: '',
        finish_time: '',
        plan_time: '',
        children: [],
    },
    {
        id: '4',
        title: '计划任务',
        text: '',
        award: {},
        state: 'running',
        have_child: false,
        get_child: false,
        show: false,
        parent: 'root',
        start_time: '',
        finish_time: '',
        plan_time: '',
        children: [],
    },
];

var openeds_: any[] = [];

export default {
    data() {
        return {
            key: 1,
            data: data,
            openeds: openeds_,
        }
    },
    methods: {
        select(item: any) {
            // item.stop;
            console.log(item);
            // console.log(this.openeds);
            if (item.have_child) {
                if (!item.get_child) {
                    // 获取数据
                    item.get_child = true;
                    // this.key++;
                    setTimeout(() => {
                        this.key++;
                    }, 2000);
                    item.show = true;
                }
                else {
                    item.show = !item.show;
                }
                if (item.show) {
                    this.openeds.push(item.id);
                }
                else {
                    this.openeds.splice(this.openeds.indexOf(item.id), 1);
                }
            }
            else {
                console.log('???');
            }
            console.log(this.openeds)
        }
    }
}
</script>

<style scoped>
.task_side {
    width: 20%;
}
</style>
