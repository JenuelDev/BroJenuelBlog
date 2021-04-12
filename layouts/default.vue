<template>
    <div id="main-window">
        <CommonScrollUp v-show="showScrollUP" />
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => {
        return {
            showScrollUP: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY) {
                this.showScrollUP = window.scrollY > 400 ? true : false
            }
        })
    },
})
</script>