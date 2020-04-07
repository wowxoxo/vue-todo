<template lang="pug">
  include mixins/bem
  +b.app#app
    +e.H1.title Todo App
    +e.env Current env: {{ appEnv }}
    Todos
    +e.count {{ count }}
    +e.final-price Final price is {{ finalPrice }}
    AddTask
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todos from "@/components/Todos.vue";
import AddTask from "./components/AddTask.vue";
import { State, Getter, Action } from "vuex-class";
import { TaskInterface } from "@/interfaces/TaskInterface";

@Component({
  components: {
    Todos,
    AddTask
  }
})
export default class App extends Vue {
  @State(state => state.count) count!: number;
  @State(state => state.tasks) tasks!: TaskInterface[];
  @Getter finalPrice!: string;
  @Getter appEnv!: string;
  @Action getTasks!: () => TaskInterface[];

  created() {
    console.log(this.appEnv);
    this.getTasks();
  }
}
</script>
