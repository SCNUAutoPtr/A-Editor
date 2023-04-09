<template>
    <div>
        <textarea v-model="content"></textarea>
        <button @click="saveToHistory(content)">保存</button>
        <el-table :data="history" style="width: 100%">
            <!-- 第1列：序号 -->
            <el-table-column label="序号">
                <template #default="scope">
                    {{ scope.$index + 1 }}
                </template>
            </el-table-column>
            <!-- 第2列：编辑 -->
            <el-table-column label="编辑">
                <template #default="scope">
                    <a @click="gotoEditPage(scope.$index)">{{ scope.row.content.substring(0, 2) }}</a>
                </template>
            </el-table-column>
            <!-- 第3列：修改时间 -->
            <el-table-column label="修改时间">
                <template #default="scope">
                    {{ scope.row.updatedAt }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const content = ref('');
        const history = ref([]);

        function saveToHistory(content) {
            const currentTime = new Date().toLocaleString();
            history.value.push({ content, time: currentTime });
        }

        function gotoEditPage(index) {
            console.log('跳转到编辑页面，index: ', index);
        }

        return {
            content,
            history,
            saveToHistory,
            gotoEditPage,
        };
    },
};
</script>
