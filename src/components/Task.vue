<template lang="pug">
  include ../mixins/bem
  +b.task(
    v-bind:class="{ 'task_completed': task.completed }"
  )
    +e.INPUT.checkbox(
      type="checkbox"
      v-on:change="markCompleted"
      :checked="task.completed"
    )
    +e.SPAN.title {{ task.title }}
    +e.BUTTON.button.delete(
      @click="$emit('del-task', task.id)"
    ) ×
</template>

<script>
export default {
  props: ["task"],
  methods: {
    markCompleted() {
      this.task.completed = !this.task.completed;
    }
  }
};
</script>
