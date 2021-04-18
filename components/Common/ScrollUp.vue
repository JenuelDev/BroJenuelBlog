<template>
    <div @click="scrollUp()" class="scroll-up-bottom-right">
        <button class="text-gray-50 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0 text-xl">
            Scroll Up
            <svg class="fill-current text-gray-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 8.414L11 18 13 18 13 8.414 17.293 12.707 18.707 11.293 12 4.586 5.293 11.293 6.707 12.707z"></path></svg>
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        scrollUp() {
            window.scroll(0, 0)
        }
    }
}
</script>
<style>
.scroll-up-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 40px;
  cursor: pointer;
  z-index: 100;
}
</style>