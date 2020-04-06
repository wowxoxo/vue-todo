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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "New task"
    };
  },
  methods: {
    ...mapActions(["postTask"]),
    addTask(e) {
      e.preventDefault();
      const newTask = {
        // id: Math.random().toString(36).substring(7),
        title: this.title,
        completed: false
      };

      this.postTask(newTask);

      this.title = "";
    }
  }
};
</script>
