<script setup lang="ts">
const blogs = await queryContent("blog").where({ active: 1 }).find();
</script>
<template>
    <NuxtLayout name="bloglayout">
        <main>
            <ContentDoc />
        </main>
    </NuxtLayout>
</template>
<style lang="scss">
.view-blog-content {
    ul {
        @apply list-upper-roman;
    }
}
</style>
