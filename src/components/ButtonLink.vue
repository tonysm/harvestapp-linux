<template>
    <a class="inline-block text-sm px-4 py-2 leading-none border rounded" :class="cssClasses">
        <slot />
    </a>
</template>

<script>
import { colorsMap } from "@/components/ButtonColors";

export default {
    name: "ButtonLink",
    props: {
        color: {
            type: String,
            default: () => 'primary',
        },
    },
    computed: {
        cssClasses () {
            return colorsMap[this.color] || colorsMap['primary'];
        }
    }
}
</script>

<style scoped>

</style>
