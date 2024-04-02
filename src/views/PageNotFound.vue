<template>
    <div class="page-not-found__view" ref="root">
        <h1>{{ $t('views.page-not-found.text') }}</h1>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const root: Ref<null> = ref(null);
</script>

<style scoped lang="scss">
.page-not-found__view {
    @include view;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
