<template lang="pug">
  include mixins/bem
  +b.app#app
    img(
      alt="Vue logo"
      src="./assets/logo.png"
    )
    +e.H1.title {{ env }}
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
      env: process.env.VUE_APP_ENV,
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
        .delete(process.env.VUE_APP_API_TODOS + id)
        .then(() => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(console.log);
    },
    addTask(newTask) {
      const { title, completed } = newTask;
      axios
        .post(process.env.VUE_APP_API_TODOS, {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        // .catch(e => console.log(e.data))
        .catch(console.log);
    }
  },
  created() {
    console.log(`${process.env.VUE_APP_ENV}`);
    axios
      .get(process.env.VUE_APP_API_TODOS + "?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(e => console.log(e));
  }
};
</script>
