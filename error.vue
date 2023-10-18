<script setup>
const error = useError();
</script>
<template>
    <NuxtLayout>
        <div class="py-30 max-w-550px mx-auto lg:px-10px sm:px-100px px-10px pb-5 gap-20 text-center">
            <NuxtImg
                src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
                width="400"
                height="400"
                class="rounded-lg mx-auto"
                alt="404 Error"
                loading="lazy"
                format="webp"
            />
            <div class="text-lg text-center mt-3">
                You've Arrived Here on Error, boss. <br />
                {{ error.message }}
            </div>
            <div class="inline-block pt-5 pb-50">
                <NuxtLink
                    to="/contact"
                    class="border px-5 py-5px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline dark:border-white border-gray-900"
                >
                    <span class="icon--solar icon--solar--home-smile-angle-broken text-25px"></span>
                    Home
                </NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>
