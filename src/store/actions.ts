import { ActionTree } from "vuex";
import { RootState } from "@/interfaces/RootState";
import axios from "axios";
import { TaskInterface } from "@/interfaces/TaskInterface";

const actions: ActionTree<{}, RootState> = {
  getTasks({ commit }) {
    axios
      .get(process.env.VUE_APP_API_TODOS + "?_limit=5")
      .then(res => {
        commit("setTasks", res.data);
      })
      .catch(e => console.log(e));
  },
  deleteTask({ commit }, id: TaskInterface["id"]) {
    axios
      .delete(process.env.VUE_APP_API_TODOS + id)
      .then(() => {
        commit("removeTask", id);
      })
      .catch(console.log);
  },
  postTask({ commit }, newTask: TaskInterface) {
    const { title, completed } = newTask;
    axios
      .post(process.env.VUE_APP_API_TODOS, {
        title,
        completed
      })
      .then(res => {
        commit("addTask", res.data);
      })
      // .catch(e => console.log(e.data))
      .catch(console.log);
  },
  putTask({ commit }, editedTask: TaskInterface) {
    axios
      .put(process.env.VUE_APP_API_TODOS + editedTask.id, editedTask)
      .then(res => {
        commit("editTask", res.data);
      })
      .catch(console.log);
  }
};

export default actions;
