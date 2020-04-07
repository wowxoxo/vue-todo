import { MutationTree } from "vuex";
import { RootState } from "@/interfaces/RootState";
import Vue from "vue";

const mutations: MutationTree<RootState> = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  removeTask: (state, id) =>
    (state.tasks = state.tasks.filter(task => task.id !== id)),
  addTask: (state, newTask) => (state.tasks = [...state.tasks, newTask]),
  editTask: (state, editedTask) => {
    const index = state.tasks.findIndex(task => task.id == editedTask.id);
    Vue.set(state.tasks, index, editedTask);
  }
};

export default mutations;
