<script setup lang="ts">
import { onMounted } from 'vue'
import { $ref } from 'vue/macros'
import Message from './components/Message.vue'

let message = $ref('Loading...')
const controller = new AbortController()

const fetchMessageFromServer = async () => {
  setTimeout(() => controller.abort(), 2e3)

  try {
    const response = await fetch(
      'http://localhost:3333/api/v1',
      { signal: controller.signal },
    )
    const body = await response.json()

    message = body
  }
  catch (error) {
    message = 'Error occurred'
  }
}

onMounted(fetchMessageFromServer)
</script>

<template>
  <Suspense>
    <Message :message="message" />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
