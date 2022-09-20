<script setup lang="ts"></script>

<template>
    <NuxtLayout name="bloglayout">
        <main class="view-blog-content">
            <ContentDoc v-slot="{ doc }">
                <h1 class="text-size-25px font-800 mb-10">{{ doc.title }}</h1>

                <ContentRenderer :value="doc" />
            </ContentDoc>
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
