<template lang="pug">
  include ../mixins/bem
  +b.task(
    v-if="typeof task === 'object'",
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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { TaskInterface } from "@/interfaces/TaskInterface";

@Component
export default class Task extends Vue {
  @Action putTask!: any;
  @Action deleteTask!: any;

  @Prop() private task!: TaskInterface;

  public markCompleted() {
    // this.task.completed = !this.task.completed;
    const editedTask = {
      ...this.task,
      completed: !this.task.completed
    };
    this.putTask(editedTask);
  }

  mounted() {
    if (typeof this.task !== "object") {
      console.warn("Prop task is not object");
    }
  }
}
</script>
