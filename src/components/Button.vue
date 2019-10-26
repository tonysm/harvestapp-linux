<template>
    <button @click.prevent="$emit('click', $event)" class="flex items-center px-3 py-2 border rounded" :class="cssClasses">
        <slot />
    </button>
</template>

<script>
import { colorsMap } from "@/components/ButtonColors";

export default {
    name: "Button",
    inheritAttrs: true,
    props: {
        color: {
            type: String,
            default: () => 'primary',
        },
    },
    computed: {
        cssClasses() {
            return colorsMap[this.color] || colorsMap['primary'];
        },
    },
}
</script>
