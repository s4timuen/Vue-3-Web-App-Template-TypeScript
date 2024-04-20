<template>
    <nav class="nav__container" ref="root">
        <ul class="nav__list">
            <li class="nav__item">
                <router-link to="/" class="link">{{ $t("links.home") }}</router-link>
            </li>
            <li class="nav__item">
                <router-link to="/about" class="link">{{ $t("links.about") }}</router-link>
            </li>
        </ul>
        <select class="locale__selection" v-model="i18n.locale.value">
            <option v-for="(locale, key) in i18n.availableLocales" :key="key">{{ locale }}</option>
        </select>
    </nav>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Composer, useI18n } from 'vue-i18n';

const i18n: Composer = useI18n();
const root: Ref<HTMLElement | null> = ref(null);
</script>

<style lang="scss">
.nav__container {
    @include link;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 3rem;
    background-color: $color-main-tint-01;
    box-shadow: 0 0.2rem 5px rgba($color-gray-rgb, 0.2);
}

.nav__list {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
}

.locale__selection {
    margin-right: 1rem;
    border-radius: 5px;
    padding: 0.25rem;
}
</style>
