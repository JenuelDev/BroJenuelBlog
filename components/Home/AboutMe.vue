<script setup lang="ts">
const currentDate = new Date();
</script>
<template>
    <div id="about-me">
        <div class="font-800 text-size-20px text-[var(--primary)] w-full max-w-500px mx-auto px-20px pt-80px">
            About Me
        </div>
        <div class="pt-5 w-full max-w-550px mx-auto px-20px">
            <div class="pb-3">
                My name is Jenuel Ganawed or call me BroJenuel. I’m a developer with a full-stack background and a keen
                eye for good design. Currently, I focus on building apps and software using web tools.
            </div>
            <div>
                Over the past {{ currentDate.getFullYear() - 2017 }} years, I’ve gained experience across some aspects
                of the application lifecycle, including frontend, backend, and dev-ops.
            </div>
        </div>
    </div>
</template>
