<script>
export default {
  name: 'Project',
  props: ['project', 'toggleCompleted', 'deleteProject', 'updateProject'],
  data() {
    return {
      edit: false,
    }
  },
  methods: {
    toggleEdit(){
      this.edit = !this.edit
    }
  }
}
</script>

<template>
  <div>
    <div v-if="!edit">
      <h2>{{ project.name }}</h2>
      <h3>{{ project.description }}</h3>
    </div>
    <div v-else>
      <form @click.prevent="toggleEdit()" >
        <input v-model="project.name" placeholder="Title" type="text">
        <input v-model="project.description" placeholder="Description" type="text">
        <button @click="updateProject(project.id, project)">Update</button>
      </form>
    </div>
    <button @click="toggleEdit()">Edit Project</button>
    <button @click="deleteProject(project.id)">Delete Project</button>
    <p @click="toggleCompleted(project.id)">Completed: {{project.completed}}</p>
  </div>
</template>
