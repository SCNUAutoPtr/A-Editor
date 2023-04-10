<template>
    <div class="file-tree">
        <div class="file-tree-header">
            <button @click="createFolder">新建文件夹</button>
        </div>
        <div class="file-tree-body">
            <ul>
                <li v-for="(folder, index) in folders" :key="index">
                    <span>{{ folder.name }}</span>
                    <button @click="deleteFolder(index)">删除</button>
                    <ul>
                        <li v-for="(subfolder, subIndex) in folder.subfolders" :key="subIndex">
                            <span>{{ subfolder.name }}</span>
                            <button @click="deleteSubfolder(index, subIndex)">删除</button>
                        </li>
                        <li>
                            <button @click="createSubfolder(index)">新建文件</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            folders: [],
        };
    },
    methods: {
        createFolder() {
            const name = prompt("请输入文件夹名称：");
            if (name) {
                this.folders.push({
                    name,
                    subfolders: [],
                });
            }
        },
        deleteFolder(index) {
            if (confirm("是否删除此文件夹？")) {
                this.folders.splice(index, 1);
            }
        },
        createSubfolder(folderIndex) {
            const name = prompt("请输入文件名称：");
            if (name) {
                this.folders[folderIndex].subfolders.push({
                    name,
                });
            }
        },
        deleteSubfolder(folderIndex, subIndex) {
            if (confirm("是否删除此文件？")) {
                this.folders[folderIndex].subfolders.splice(subIndex, 1);
            }
        },
    },
};
</script>

<style>
.file-tree {
    width: 200px;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    background-color: #f5f5f5;
}

.file-tree-header {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #eee;
    border-bottom: 1px solid #ddd;
}

.file-tree-body {
    height: calc(100% - 40px);
    overflow-y: auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li span {
    margin-right: 10px;
}
</style>
