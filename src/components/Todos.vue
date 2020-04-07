<template lang="pug">
  include ../mixins/bem
  +b.todos
    +e.items_left
      +e.items-title Сделать
      Task(
        v-for="task in uncompletedTasks"
        :key="task.id"
        :task="task"
      )
    
    +e.items_completed
      +e.items-title Готово
      Task(
        v-for="task in completedTasks"
        :key="task.id + '-ready'"
        :task="task"
      )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Task from "@/components/Task.vue";

@Component({
  components: {
    Task
  }
})
export default class Todos extends Vue {
  @Getter completedTasks!: any; //todo
  @Getter uncompletedTasks!: any; //todo
}
</script>
