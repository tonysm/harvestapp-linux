import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/store/data';
import {
  Status,
  actions,
  mutations,
  StoreData,
  Timer,
} from "@/store/types";
import broadcaster from "@/broadcaster";

Vue.use(Vuex);

const initialState: StoreData = {
  clients: [],
  projects: [],
  timers: {
    status: Status.ready,
    items: [],
  },
  user: undefined,
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [mutations.setTimerStatus](state: StoreData, { status }: { status: Status }) {
      state.timers.status = status;
    },
    [mutations.setTimers](state: StoreData, { timers }: { timers: Timer[] }) {
      state.timers.status = Status.ready;
      state.timers.items = timers;
    },
    [mutations.stopTimer](state: StoreData) {
      broadcaster.send('timer:stop');

      state.timers.items = state.timers.items.map((t: Timer) => {
        return {
          ...t,
          is_running: false,
        };
      });
    },
    [mutations.startTimer](state: StoreData, { timer }: { timer: Timer }) {
      broadcaster.send('timer:start', { timer });

      state.timers.items = state.timers.items.map((t: Timer) => {
        return {
          ...t,
          is_running: t.id === timer.id,
        };
      });
    },
  },
  actions: {
    [actions.toggleTimer](context, { timer } : { timer: Timer }) {
      if (timer.is_running) {
        context.commit({
          type: mutations.stopTimer,
          timer,
        });
      } else {
        context.commit({
          type: mutations.startTimer,
          timer,
        });
      }
    },
    [actions.loadTimers](context, { token }: { token: string }) {
      context.commit({
        type: mutations.setTimerStatus,
        status: Status.loading,
      });

      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit({
            type: mutations.setTimers,
            timers: data.timers,
          });

          resolve(data.timers);
        }, 3000);
      });
    }
  },
  getters: {
  }
})
