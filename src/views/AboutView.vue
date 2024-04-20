<template>
    <div class="about__view" ref="root">
        <h1>{{ $t('views.about.title') }}</h1>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const root: Ref<HTMLElement | null> = ref(null);
</script>

<style scoped lang="scss">
.about__view {
    @include view;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>