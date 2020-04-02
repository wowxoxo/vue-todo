<template>
  <div class="task" v-bind:class="{ completed: task.completed }">
    <p>
      <input
        type="checkbox"
        v-on:change="markCompleted"
        :checked="task.completed"
      />
      {{ task.title }}
      <button class="delete" @click="$emit('del-task', task.id)">x</button>
    </p>
  </div>
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
