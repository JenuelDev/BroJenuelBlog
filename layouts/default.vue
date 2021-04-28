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
    head() {
        return {
            script: [
                {
                    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
                }
            ]
        }
    },
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
        
        kofiWidgetOverlay.draw('brojenuel', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Tip Me',
            'floating-chat.donateButton.background-color': '#ff5f5f',
            'floating-chat.donateButton.text-color': '#fff'
        });
    },
})
</script>