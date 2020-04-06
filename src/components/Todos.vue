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

<script>
import { mapGetters } from "vuex";
import Task from "@/components/Task.vue";
export default {
  components: {
    Task
  },
  computed: {
    ...mapGetters(["completedTasks", "uncompletedTasks"])
  }
};
</script>
