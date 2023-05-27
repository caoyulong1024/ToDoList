<script setup lang="ts">
import task_list from '../components/task_list.vue'
</script>

<template>
    <el-scrollbar class="task_side">
        <el-menu :default-openeds="openeds">
            <task_list :key="key" :openeds="openeds" :children="data" :select="select" :add_child="add_child" @add_child="add_child" :add_bro="add_bro" @add_bro="add_bro"/>
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
                title: '主线1',
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

// var temp = {
//     id: '6',
//     title: 'test',
//     text: '',
//     award: {},
//     state: 'running',
//     have_child: false,
//     get_child: false,
//     show: false,
//     parent: 'root',
//     start_time: '',
//     finish_time: '',
//     plan_time: '',
//     children: [],
// }

// var right_select_item: any;

export default {
    data() {
        return {
            key: 100,
            data: data,
            openeds: openeds_,
            temp : {
                id: '',
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
            }
        }
    },
    methods: {
        select(item: any) {
            // item.stop;
            // console.log(item);
            // console.log(this.openeds);
            if (item.have_child) {
                if (!item.get_child) {
                    // 获取数据
                    item.get_child = true;
                    // this.key++;
                    setTimeout(() => {
                        this.key++;
                        this.init_data(item);
                    }, 1000);
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
                // console.log('???');
            }
            // console.log(this.openeds)
        },
        init_data(item: any){
            for (var i=0; i<item.children.length; i++){
                item.children[i].parent = item;
            }
            console.log(item);
        },
        add_child(item: any) {
            // console.log(item);
            item.have_child = true;
            // 还是得先传到后端拿一个id才行，还是直接从后端拿json吧
            let temp_copy = JSON.parse(JSON.stringify(this.temp));
            temp_copy.id = this.key.toString();
            item.children.push(temp_copy);
            // this.openeds.push(item.id);
            this.key++;
            // console.log(this.openeds);
        },
        add_bro(item: any){
            let temp_copy = JSON.parse(JSON.stringify(this.temp));
            temp_copy.id = this.key.toString();
            if (item.parent == 'root'){    
                this.data.push(temp_copy);
                temp_copy.parent = 'root';
            }
            else {
                item.parent.children.push(temp_copy);
                temp_copy.parent = item.parent;
            }
            this.key++;
        },
    }
}
</script>

<style scoped>
.task_side {
    width: 18%;
}
</style>
