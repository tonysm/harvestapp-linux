<template>
    <table class="table-auto text-left border w-full">
        <thead class="border-b">
        <tr>
            <th class="w-3/5 px-4 py-2">Last timers</th>
            <th class="w-1/5 px-4 py-2 text-center">Hours</th>
            <th class="w-1/5 px-4 py-2 text-center">Time Tracked</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="timer in timers" :key="timer.id" :class="{'bg-orange-200': timer.is_running}">
            <td class="px-4 py-2">
                <div>
                    <h3 class="text-sm font-bold">{{timer.project.name}} <small class="text-gray-600">({{timer.client.name}})</small></h3>
                </div>
                <div class="text-gray-800">
                    {{ timer.task.name }} - {{ timer.notes }}
                </div>
            </td>
            <td class="px-4 py-2 text-center">
                0:33
            </td>
            <td class="px-4 py-2 flex justify-center">
                <Button :color="timer.is_running ? 'inverted' : 'primary'">
                    <svg class="h-6 w-6 mr-2" :class="{'rotate': timer.is_running}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/></svg>
                    {{ timer.is_running ? 'Stop' : 'Start' }}
                </Button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import Button from "@/components/Button";

export default {
    name: "TimersTable",
    components: {
        Button,
    },
    props: {
        timers: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style scoped>
@keyframes infinite-rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.rotate {
    animation: infinite-rotate 5s linear infinite;
}
</style>
