<template lang="pug">
  include ../mixins/bem
  +b.todos
    +e.items_left
      +e.items-title Сделать
      Task(
        v-for="task in todos"
        :key="task.id"
        :task="task"
        v-on:del-task="$emit('del-task', task.id)"
      )
    
    +e.items_completed
      +e.items-title Готово
      Task(
        v-for="task in todos"
        :key="task.id"
        :task="task"
        v-on:del-task="$emit('del-task', task.id)"
      )
</template>

<script>
import Task from "@/components/Task.vue";
export default {
  props: ["todos"],
  components: {
    Task
  }
};
</script>
