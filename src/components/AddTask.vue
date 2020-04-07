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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { TaskInterface } from "@/interfaces/TaskInterface";

@Component
export default class AddTask extends Vue {
  @Action postTask!: (task: TaskInterface) => void;

  private title: string = "New task";

  public addTask(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    const newTask: TaskInterface = {
      title: this.title,
      completed: false
    };

    this.postTask(newTask);

    this.title = "";
  }
}
</script>
