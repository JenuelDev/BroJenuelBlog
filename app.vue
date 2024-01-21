<script lang="ts" setup>
onMounted(() => {
    var style = "color:#64ffdb;background:#0a192f;font-size:20px;";
    console.log(
        "%cHi! ✋, Thanks For Visiting My Home In The Internet, Follow me:\nTwitter: www.twitter.com/BroJenuel\nYoutube: www.youtube.com/@brojenuel\nFacebook: www.facebook.com/BroJenuelOfficial\nThreads: www.threads.net/@brojenuel\nInstagram: www.instagram.com/brojenuel",
        style
    );
});
</script>
<template>
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss">
.btn {
    @apply flex items-center justify-center gap-1 rounded-md sm:px-10px sm:py-5px px-30px py-10px  whitespace-nowrap cursor-pointer  duration-150 border border-[var(--gray-lighter)];

    &.left-up {
        @apply transform translate-y-1 transition-transform;
    }

    &.btn-lg {
        @apply sm:px-20px sm:py-10px px-40px py-20px;
    }

    &.btn-filled {
        @apply border border-[var(--primary)] bg-[var(--primary)] dark:text-dark-900 text-white;
    }

    &:hover {
        @apply translate-y-0 bg-[var(--primary)] dark:text-[var(--background)] text-white border-[var(--primary)];

        &.btn-filled {
            @apply border-[var(--primary-darker)] bg-[var(--primary-darker)];
        }
    }
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
