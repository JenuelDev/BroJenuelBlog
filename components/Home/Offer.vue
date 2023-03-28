<script setup lang="ts">
const offers = useMyOffers();
</script>
<template>
    <div id="what-i-offer" class="my-work pt-30px">
        <div>
            <div class="w-full max-w-500px mx-auto mt-50px px-20px">
                <div class="font-800 text-size-20px text-[var(--primary)]">What I Can Offer</div>
                <div class="pt-5">
                    <div class="indent-md">
                        If you hire me, here are the things that I can do to help solve some of your company's problems, and help to reduce issues. I will also create and maintain
                        web apps.
                    </div>
                </div>
            </div>
            <div class="max-w-600px lg:max-w-700px mx-auto px-10px pt-20px">
                <div class="grid grid-cols-1 gap-3">
                    <div v-for="offer in offers" :key="offer.title" class="p-5 bg-[var(--background-secondary)] rounded-md group">
                        <div class="flex gap-2 text-size-20px group-hover:text-[var(--primary)] font-700">
                            <Icon :name="offer.icon" />
                            <div>{{ offer.title }}</div>
                        </div>
                        <div class="pt-3">
                            {{ offer.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
