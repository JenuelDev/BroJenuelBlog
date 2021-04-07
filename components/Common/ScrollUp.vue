<template>
    <a href="#top-navigation" v-show="visible" class="scroll-up-bottom-right">
        <button class="text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Scroll Up
        </button>
    </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data () {
        return {
            visible: true,
        }
    },
})
</script>

<style>
.scroll-up-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
}
</style>