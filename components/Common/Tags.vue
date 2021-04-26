<template>
    <div class="m-3">
        <span v-for="tag in tags" :key="tag" :class="`blog-tag tag-${tag}`">#{{tag}}</span>
    </div>
</template>
<script>
export default {
    props: ['tags']
}
</script>
<style lang="scss">
    .blog-tag {
        padding: 3px 10px;
        background-color: rgba(0,0,0,0.8);
        border-radius: 5px;
        margin: 0 3px;

        &.tag-javascript, &.tag-JavaScript {
            background-color: #f0db4f;
            color: rgb(16, 16, 16);
        }

        &.tag-vue, &.tag-VueJs {
            color: rgb(16, 16, 16);
            background-color: #42b883;
        }

        &.tag-html {
            background-color: #e34c26;
            color: rgb(16, 16, 16);
        }

        &.tag-css {
            background-color: #264de4;
            color: rgb(16, 16, 16);
        }

        &.tag-NuxtJs {
            background-color: #42b883;
            color: rgb(16, 16, 16);
        }

        &.tag-PWA {
            background-color: #e19e21;
            color: rgb(16, 16, 16);
        }

        &.tag-Developer, &.tag-developer {
            background-color: #000;
            color: #fff;
        }
    }
</style>