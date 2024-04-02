<template>
    <div class="home__view" ref="root">
        <TemplateComponent :id="uuid()" @delete-template-info="logId($event)"></TemplateComponent>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { v4 as uuid } from 'uuid';
import TemplateComponent from '@/components/TemplateComponent.vue';

const root: Ref<null> = ref(null);

function logId(id: string): void {
    console.log(`ID: ${id}`);
}
</script>

<style scoped lang="scss">
.home__view {
    @include view;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>