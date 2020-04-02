<template lang="pug">
  include ../mixins/bem
  +b.task(
    class="task"
    v-bind:class="{ completed: task.completed }"
  )
    +e.container
      +e.INPUT.checkbox(
        type="checkbox"
        v-on:change="markCompleted"
        :checked="task.completed"
      )
      +e.SPAN.title {{ task.title }}
      +e.BUTTON.button.delete(
        @click="$emit('del-task', task.id)"
      ) x
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
