<template lang="pug">
  include ../mixins/bem
  +b.add-task
    +e.FORM.form
      +e.INPUT.input(
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Task ..."
      )
      +e.INPUT.submit.button(
        type="submit"
        value="Submit"
        @click="addTask"
      )

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
