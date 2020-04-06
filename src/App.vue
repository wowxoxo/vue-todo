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

<script>
import Todos from "@/components/Todos.vue";
import AddTask from "@/components/AddTask.vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Todos,
    AddTask
  },
  computed: {
    ...mapState(["count", "tasks"]),
    ...mapGetters(["finalPrice", "appEnv"])
    // ...mapState({
    //   stateCount: (state) => state.count
    // }),
    // finalPrice() {
    //   return this.$store.getters.finalPrice;
    // },
    // count() {
    //   return this.stateCount;
    // },
  },
  methods: {
    ...mapActions(["getTasks"])
  },
  created() {
    console.log(`${process.env.VUE_APP_ENV}`);
    this.getTasks();
  }
};
</script>
