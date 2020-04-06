import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    price: 100,
    tasks: []
  },
  getters: {
    finalPrice: state => {
      return state.price * 10 + " Р";
    },
    appEnv: () => process.env.VUE_APP_ENV,
    uncompletedTasks: state =>
      state.tasks.filter(task => task.completed !== true),
    completedTasks: state =>
      state.tasks.filter(task => task.completed !== false)
  },
  mutations: {
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
  },
  actions: {
    getTasks({ commit }) {
      axios
        .get(process.env.VUE_APP_API_TODOS + "?_limit=5")
        .then(res => {
          commit("setTasks", res.data);
        })
        .catch(e => console.log(e));
    },
    deleteTask({ commit }, id) {
      axios
        .delete(process.env.VUE_APP_API_TODOS + id)
        .then(() => {
          commit("removeTask", id);
        })
        .catch(console.log);
    },
    postTask({ commit }, newTask) {
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
    putTask({ commit }, editedTask) {
      axios
        .put(process.env.VUE_APP_API_TODOS + editedTask.id, editedTask)
        .then(res => {
          commit("editTask", res.data);
        })
        .catch(console.log);
    }
  }
});
