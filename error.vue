<template>
    <NuxtLayout>
        <div class="mt-70px min-h-100vh max-w-850px mx-auto lg:px-10px sm:px-100px px-10px pb-5 gap-20">
            <img
                src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
                width="400"
                height="400"
                class="rounded-lg mx-auto"
            />
            <div class="text-4xl text-center mt-3">You've Arrived Here on Error, boss</div>
            <button
                class="btn btn-filled sm:w-auto w-full group md:text-size-18px text-size-20px mx-auto"
                @click="goBack"
            >
                HOME
            </button>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push("/");
        },
    },
};
</script>
