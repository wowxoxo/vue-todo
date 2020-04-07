<template lang="pug">
  include mixins/bem
  +b.app#app
    +e.H1.title Todo App
    +e.env Current env: {{ appEnv }}
    Todos
    +e.count {{ count }}
    +e.final-price Final price is {{ finalPrice }}
    AddTask
    //- HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todos from "@/components/Todos.vue";
import AddTask from "./components/AddTask.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import { mapActions, mapState, mapGetters } from "vuex";
import { State, Getter, Action } from "vuex-class";

@Component({
  components: {
    Todos,
    AddTask
    // HelloWorld
  }
})
export default class App extends Vue {
  @State(state => state.count) count!: number;
  @State(state => state.tasks) tasks!: string[];
  @Getter finalPrice!: string;
  @Getter appEnv!: string;
  @Action getTasks!: any;

  created() {
    console.log(this.appEnv);
    this.getTasks();
  }
}
</script>
