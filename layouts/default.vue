<template>
    <div id="main-window" class="w-full h-screen bg-gray-900 overflow-y-scroll">
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
        // let scrollDocument = window.document.getElementById('main-window');
        // if (scrollDocument !== null) {
        //     scrollDocument.addEventListener('scroll', (event) => {
        //         console.log(event.target)
        //     })
        // }
        let scrollDocument = document.getElementById('main-window')
        if (scrollDocument != null) {
            scrollDocument.addEventListener('scroll', () => {
                if (scrollDocument) {
                    this.showScrollUP = scrollDocument.scrollTop > 400 ? true : false
                }
            })
        }
    },
})
</script>