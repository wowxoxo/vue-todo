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

<style lang="sass">
form
  display: flex
  width: 50vw
  margin: 0 auto
  justify-content: center
  margin-top: 40px

input[type="text"]
    flex: 10
    padding: 5px

input[type="submit"]
    flex: 2
</style>
