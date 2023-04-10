<template>
  <div>
    <button @click="handleClick">跳转到 Show 页面</button>

    <SearchLabel></SearchLabel>
    <CommentArea></CommentArea>
    <BasicEditor></BasicEditor>
    <div class="file-explorer">
      <h3>文件夹</h3>
      <button class="new-folder" @click="newFolder(folder)">新建文件夹</button>
      <ul>
        <li v-for="(folder, index) in folders" :key="index">
          <span class="folder-name">{{ folder.name }}</span>
          <span class="folder-actions">
            <button class="new-file" @click="newFile(folder)">新建文件</button>
            <button class="delete-folder" @click="deleteFolder(index)">删除文件夹</button>
          </span>
          <ul v-if="folder.files && folder.files.length">
            <li v-for="(file, fileIndex) in folder.files" :key="fileIndex">
              <span class="file-name">{{ file.name }}</span>
              <span class="file-actions">
                <button class="delete-file" @click="deleteFile(folder, fileIndex)">删除文件</button>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <HistoryRecord></HistoryRecord>

    </div>
  </div>
</template>
  
<script>
import SearchLabel from './SearchLabel.vue';
import CommentArea from "./CommentArea.vue";
import BasicEditor from './BasicEditor.vue';
import HistoryRecord from "./HistoryRecord.vue";
export default {
  components: {
    SearchLabel,
    CommentArea,
    BasicEditor,
    HistoryRecord
  },
  data() {
    return {
      folders: [
        {
          name: 'Folder 1',
          files: [{ name: 'File 1' }, { name: 'File 2' }],
        },
        {
          name: 'Folder 2',
          files: [{ name: 'File 3' }, { name: 'File 4' }],
        },
        {
          name: 'Folder 3',
          files: [{ name: 'File 5' }, { name: 'File 6' }],
        },
      ],
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/show')
    },
    newFolder(parentFolder) {
      const name = prompt('请输入文件夹名称');
      if (name) {
        if (!parentFolder) {
          this.folders.push({
            name,
            files: [],
            folders: [],
          });
        }
        else {
          parentFolder.folders = parentFolder.folders || [];
          parentFolder.folders.push({
            name,
            files: [],
            folders: [],
          });
        }
      }
    },
    deleteFolder(index) {
      this.folders.splice(index, 1);
    },
    newFile(folder) {
      folder.files.push({ name: 'New File' });
    },
    deleteFile(folder, index) {
      folder.files.splice(index, 1);
    },
  }
}
</script>
