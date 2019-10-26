<template>
    <nav class="container mx-auto flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-orange-500 mr-6">
            <img src="../assets/logo.png" class="h-8 rounded" alt="">
            <span class="ml-2 font-semibold text-xl tracking-tight">HarvestApp for Linux</span>
        </div>
        <div class="block lg:hidden">
            <Button @click="showMenu = !showMenu">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </Button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:justify-end lg:w-auto" :class="{'hidden lg:visible': !showMenu}">
            <div>
                <a href="#responsive-header" class="block mr-4 mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-orange-400">
                    Tony Messias
                </a>
                <ButtonLink href="#" class="mt-4 lg:mt-0">
                    Login
                </ButtonLink>
            </div>
        </div>
    </nav>
</template>

<script>
import ButtonLink from "@/components/ButtonLink";
import Button from "@/components/Button";

export default {
    name: "Navigation",
    components: {
        Button,
        ButtonLink,
    },
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>
