<template lang="pug">
  include ../mixins/bem
  +b.task(
    v-bind:class="{ 'task_completed': task.completed }"
  )
    +e.INPUT.checkbox(
      type="checkbox"
      @change="markCompleted"
      :checked="task.completed"
    )
    +e.SPAN.title {{ task.title }}
    +e.BUTTON.button.delete(
      @click="deleteTask(task.id)"
    ) ×
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task"],
  methods: {
    ...mapActions(["putTask", "deleteTask"]),
    markCompleted() {
      // this.task.completed = !this.task.completed;
      const editedTask = {
        ...this.task,
        completed: !this.task.completed
      };
      this.putTask(editedTask);
    }
  }
};
</script>
