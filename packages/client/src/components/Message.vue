<script setup lang="ts">
interface Props {
  message: string
}

const { message } = defineProps<Props>()
</script>

<template>
  <p>{{ message }}</p>
</template>
