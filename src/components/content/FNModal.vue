<script setup lang="ts">
import { defineEmits } from "vue";
import '@/components/styles/modal.css';


// Emits for closing the modal
const emit = defineEmits(["close-modal"]);

// Function to close the modal
const handleCloseModal = () => {
  emit("close-modal");
   window.location.reload();
};

</script>

<template>
  <div class="fn-modal">
    <div class="fn-modal-content">
      <div class="fn-modal-header">
        <div class="fn-modal-image">
          <slot name="fn-modal-icon"></slot>
        </div>
        <div class="fn-modal-body">
          <h2><slot name="fn-modal-title"></slot></h2>
          <p><slot name="fn-modal-text"></slot></p>
        </div>
      </div>
      <div class="fn-modal-footer">
        <button @click="handleCloseModal">Close</button>
      </div>
    </div>
  </div>
</template>