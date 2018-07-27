<template>
  <form @click.prevent>
      <input v-model="projectName" placeholder="Project Name" type="text">
      <input v-model="projectDesc" placeholder="Project Description" type="text">
      <button @click="addProject">Create Project</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddProject',
  props: ['projects'],
  data() {
    return {
      projectName: '',
      projectDesc: '',
    }
  },
  methods:{
     addProject(){
      let project = {
        name: this.projectName,
        description: this.projectDesc,
        completed: false
      }
      axios.post('http://localhost:8000/api/projects', project).then(res => {
        this.projects.push(res.data)
      })
      this.projectName = '',
      this.projectDesc = ''
    }
  }
}
</script>
