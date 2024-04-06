<script lang="ts" setup>
const lightX = ref(0);
const lightY = ref(0);

onMounted(() => {
    window.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;

        lightX.value = clientX;
        lightY.value = window.scrollY + clientY;
    });
});
</script>
<template>
    <div
        class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        :style="`background: radial-gradient(
                600px at ${lightX}px ${lightY}px,
                rgba(29, 78, 216, 0.15),
                transparent 80%
            );`"
    ></div>
</template>
