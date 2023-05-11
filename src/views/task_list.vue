<script setup lang="ts">
    import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script>


<template>
    <el-scrollbar>
        <el-menu>
            <el-sub-menu index="1">
                <template #title>
                    主线任务
                </template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="1-1">Option 1</el-menu-item>
                    <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu>
                <template #title>
                    支线任务
                </template>
                <el-menu-item>
                    123
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
var main_task = [
    {

    }
]

var data = {

}

export default {
    data() {
        return {

        }
    }
}

</script>