<template>
  <div class="template__container" :id="props.id" v-if="!deleted" ref="root">
    <h3 class="template__title">{{ getTitle }}</h3>
    <p class="template__text">{{ getDescription }}</p>
    <div class="template__buttons">
      <button class="btn btn--success" @click="changeDescription()">{{ $t(`buttons.${changeOrLoading}`) }}</button>
      <button class="btn btn--critical" @click="deleteTemplate()">{{ $t("buttons.delete") }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref, ComputedRef } from 'vue';
import { Store, storeToRefs } from 'pinia';
import { ApiOptions } from '@/models/apiOptions';
import useTemplateStore, { TemplateStoreActions, TemplateStoreGetters, TemplateStoreState } from '@/stores/templateStore.ts';
import useApiStore, { ApiStoreActions, ApiStoreGetters, ApiStoreState } from '@/stores/apiStore.ts';
import useDeleteComponent from '@/composables/deleteComponent.ts';

// eslint-disable-next-line -- compiler macro
const props = defineProps<{
  id: string
}>();

// eslint-disable-next-line -- compiler macro
const emits = defineEmits<{
  'delete-template-info': [value: string]
}>();

// Stores
const templateStore: Store<'templateStore', TemplateStoreState, TemplateStoreGetters, TemplateStoreActions> = useTemplateStore();
const apiStore: Store<'apiStore', ApiStoreState, ApiStoreGetters, ApiStoreActions> = useApiStore();
const { getTitle, getDescription } = storeToRefs(templateStore);

// Delete Template
const { root, deleted, deleteComponent } = useDeleteComponent();
function deleteTemplate(): void {
  deleteComponent();
  emits('delete-template-info', props.id);
}

// Change Description
const isLoading: Ref<boolean> = ref(false);
const changeOrLoading: ComputedRef<'loading' | 'change'> = computed(() => {
  return isLoading.value ? 'loading' : 'change';
});

function changeDescription(): void {
  if (root.value !== null) {
    const changeBtn: HTMLButtonElement | null = root.value.querySelector('.btn.btn--success');
    if (changeBtn !== null) {
      changeBtn.disabled = true;
      isLoading.value = true;

      const url: string = apiStore.createRandomLoremUrl();
      const options: ApiOptions = apiStore.createApiOptions();

      fetch(url, options)
        .then((res: Response) => res.json())
        .then((res: object) => {
          if ('text' in res && typeof res.text === 'string') {
            templateStore.setDescription(res.text)
          } else {
            throw new Error(`Invalid Response from ${url}`);
          }
        })
        .catch((error: Error) => console.error('Fetch', error))
        .finally(() => {
          isLoading.value = false;
          changeBtn.disabled = false;
        });
    }
  }
}
</script>

<style scoped lang="scss">
.template__container {
  @include button;

  border: 2px solid $color-gray;
  border-radius: 5px;
  background-color: $color-main-tint-04;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: $shadow;

  .template__title {
    font-size: 2rem;
  }

  .template__text {
    line-height: 2;
  }

  .template__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
