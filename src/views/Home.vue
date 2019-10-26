<template>
  <div class="container mx-auto p-6">
    <div class="flex justify-center">
      <TimersTable
        :timers="timers"
        @toggleTimer="toggleTimer"
      />
    </div>
  </div>
</template>

<script>
import TimersTable from "@/components/TimersTable";

export default {
  name: 'home',
  components: {
    TimersTable,
  },
  data () {
    return {
      timers: [
        {
          id: 1,
          notes: 'Lorem ipsum',
          is_running: false,
          hours: 3.4,
          client: {
            id: 1,
            name: 'madewithlove',
          },
          project: {
            id: 1,
            name: 'Internal'
          },
          task: {
            id: 1,
            name: 'Friyay',
          },
        },
        {
          id: 2,
          notes: 'Lorem ipsum',
          is_running: true,
          hours: 3.4,
          client: {
            id: 1,
            name: 'madewithlove',
          },
          project: {
            id: 1,
            name: 'Internal'
          },
          task: {
            id: 1,
            name: 'Friyay',
          },
        },
        {
          id: 3,
          notes: 'Lorem ipsum',
          is_running: false,
          hours: 3.4,
          client: {
            id: 1,
            name: 'madewithlove',
          },
          project: {
            id: 1,
            name: 'Internal'
          },
          task: {
            id: 1,
            name: 'Friyay',
          },
        },
      ],
    };
  },
  methods: {
    toggleTimer(timer) {
      timer.is_running = !timer.is_running;
    },
  },
}
</script>
