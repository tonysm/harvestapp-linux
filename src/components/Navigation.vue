<template>
    <nav class="flex items-center justify-between flex-wrap bg-orange-500 p-6">
        <div class="flex items-center flex-shrink-0 text-orange-100 mr-6">
            <img src="../assets/logo.png" class="h-8 border-2 border-orange-300 rounded" alt="">
            <span class="ml-2 font-semibold text-xl tracking-tight">HarvestApp for Linux</span>
        </div>
        <div class="block lg:hidden">
            <button @click.prevent="showMenu = !showMenu" class="flex items-center px-3 py-2 border border-orange-200 rounded text-teal-200 hover:text-orange-100 hover:border-orange-100">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex justify-end lg:w-auto" :class="{'sm:hidden': !showMenu}">
            <div>
                <a href="#responsive-header" class="block mr-4 mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-orange-100">
                    Tony Messias
                </a>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-200 border-orange-200 hover:border-transparent hover:text-orange-500 hover:bg-orange-100 mt-4 lg:mt-0">Login</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>
