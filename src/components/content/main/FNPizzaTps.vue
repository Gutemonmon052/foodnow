<script setup lang="ts">
import type { IToppings } from "@/components/interfaces/IToppings";
import { computed } from "vue";
import "@/components/styles/topping.css";

// Props for receiving toppings data
const props = defineProps<IToppings & { isSelected?: boolean; isDisabled?: boolean }>();

// Reactive state for selection Toppings Data
const isSelected = computed(() => props.isSelected ?? false);
const isDisabled = computed(() => props.isDisabled ?? false);

// Emits for updating the selected toppings
const emit = defineEmits<{
  (e: "click", id: number): void;
}>();
function handleChange() {
  emit("click", props.id);
}
</script>

<template>
  <label class="fn-pizza-tps-item" :class="{ active: isSelected }">
    <input
      type="checkbox"
      :checked="isSelected"
      @change="handleChange"
      style="display: none"
      :disabled="isDisabled"
    />
    <span class="fn-checkbox-label">
      <slot name="topping-name">{{ name }}</slot>
    </span>
  </label>
</template>
