<template>
  <div class="container mx-auto p-6">
    <div class="flex justify-center">
      <TimersTable
        :timers="timers"
        @toggleTimer="(timer) => toggleTimer(timer)"
      />
    </div>
  </div>
</template>

<script>
import TimersTable from "@/components/TimersTable";
import { mapState } from 'vuex';
import { actions, Status } from "@/store/types";

export default {
  name: 'home',
  components: {
    TimersTable,
  },
  computed: {
    ...mapState({
      loading: (state) => state.timers.state === Status.loading,
      timers: (state) => state.timers.items,
    }),
  },
  methods: {
    toggleTimer(timer) {
      this.$store.dispatch({
        type: actions.toggleTimer,
        timer,
      });
    }
  },
  mounted() {
    this.$store.dispatch({
      type: actions.loadTimers,
      token: 'lorem',
    });
  },
}
</script>
