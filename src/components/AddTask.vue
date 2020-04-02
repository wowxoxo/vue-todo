<template>
  <div>
    <form>
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Task ..."
      />
      <input type="submit" value="Submit" class="button" @click="addTask" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "New task"
    };
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      const newTask = {
        // id: Math.random().toString(36).substring(7),
        title: this.title,
        completed: false
      };

      this.$emit("add-task", newTask);

      this.title = "";
    }
  }
};
</script>
