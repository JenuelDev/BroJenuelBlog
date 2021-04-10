<template>
  <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full bg-blue-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Blog Contents</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="container px-5 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <CommonBlogCard v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item"/>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>