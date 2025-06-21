<script setup lang="ts">
import type { ISize } from "../../interfaces/ISize";
import "@/components/styles/sizeRadio.css";
import { computed } from "vue";


// Props for receiving size pizza data
const props = defineProps<ISize & { modelValue?: string | number; value: string | number }>();

// Emits for updating the selected size
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();


// Reactive state for selection size
const isSelected = computed(() => props.modelValue === props.value);

// Get price label
const priceLabel = props.extra_price && props.extra_price !== 0 ? `(+${props.extra_price}$)` : "";

// Function to update the selected size
function onChange() {
  if (props.value !== undefined) {
    emit("update:modelValue", props.value);
  }
}
</script>

<template>
  <div class="fn-pizza-size-item">
    <label class="fn-radio">
      <input
        type="radio"
        :name="props.name"
        :value="props.value"
        :checked="isSelected"
        @change="onChange"
      />
      <span class="fn-custom-radio"></span>
      <span class="fn-radio-label">
        <slot name="size-name">{{ props.name }}</slot>
      </span>
      <span class="fn-radio-price">
        <slot name="size-price">{{ priceLabel }}</slot>
      </span>
    </label>
  </div>
</template>
