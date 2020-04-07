import { GetterTree } from "vuex";
import { RootState } from "@/interfaces/RootState";

const getters: GetterTree<RootState, {}> = {
  finalPrice: state => {
    return state.price * 10 + " Р";
  },
  appEnv: () => process.env.VUE_APP_ENV,
  uncompletedTasks: state =>
    state.tasks.filter(task => task.completed !== true),
  completedTasks: state => state.tasks.filter(task => task.completed !== false)
};

export default getters;
