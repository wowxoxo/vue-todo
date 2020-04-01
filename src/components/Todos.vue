<template>
  <div class="todos">
    <div v-for="task in todos" v-bind:key="task.id">
      <Task :task="task" v-on:del-task="$emit('del-task', task.id)" />
    </div>
  </div>
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

<style lang="scss">
.todos {
  width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
