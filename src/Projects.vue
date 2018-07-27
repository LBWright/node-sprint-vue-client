<script>
import axios from 'axios';
import AddProject from './AddProject';
import Project from './Project';

export default {
  name: 'Projects',
  components: {
    AddProject,
    Project
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    toggleCompleted(id){
      this.projects = this.projects.map(project => {
        if (project.id === id){
          project.completed = !project.completed;
        }
        return project;
      })
    },
    deleteProject(id) {
      axios.delete(`http://localhost:8000/api/projects/${id}`)
      this.projects = this.projects.filter(project => project.id !== id)
    },
    updateProject(id, project) {
      console.log('id', id)
      console.log('project', project)
      axios.put(`http://localhost:8000/api/projects/${id}`, project)
      .then(res => console.log(res.data) )
      .catch(err => console.log(err))
    }
   
  },
  created() {
    axios.get('http://localhost:8000/api/projects').then(res => {
      console.log(res)
      this.projects = res.data;
    })
  },
}
</script>

<template>
  <div>
    <h1>A List of Projects</h1>
    <h2>Create a Project</h2>
    <AddProject :projects="projects" />
    <div v-for="project in projects" :key="project.id">
      <Project :deleteProject="deleteProject" :updateProject="updateProject" :project="project" :toggleCompleted="toggleCompleted" />
    </div>
  </div>
</template>