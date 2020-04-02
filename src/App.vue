<template lang="pug">
  include mixins/bem
  #app
    img(
      alt="Vue logo"
      src="./assets/logo.png"
    )
    Todos(
      v-bind:todos="todos"
      v-on:del-task="delTask"
    )
    AddTask(
      v-on:add-task="addTask"
    )
</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTask from "@/components/AddTask.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Todos,
    AddTask
  },
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   title: 'Todo 1',
        //   completed: true
        // },
        // {
        //   id: 2,
        //   title: 'Todo 2',
        //   completed: false
        // },
        // {
        //   id: 3,
        //   title: 'Todo 3',
        //   completed: false
        // },
      ]
    };
  },
  methods: {
    delTask(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(console.log);
    },
    addTask(newTask) {
      const { title, completed } = newTask;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        // .catch(e => console.log(e.data))
        .catch(console.log);
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(e => console.log(e));
  }
};
</script>
