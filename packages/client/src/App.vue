<script setup lang="ts">
import destr from 'destr'
import { onMounted } from 'vue'
import { $ref } from 'vue/macros'
import Message from '@components/Message.vue'

let message = $ref('Loading...')
let pingPong = $ref('Connecting...')
const controller = new AbortController()
const baseUrl = 'http://localhost:3333/api/v1'

const fetchMessageFromServer = async () => {
  setTimeout(() => controller.abort(), 2e3)

  try {
    const response = await fetch(baseUrl, { signal: controller.signal })
    const body = await response.json()

    message = body?.message
  }
  catch (error) {
    message = 'Error occurred'
  }
}

const webSocket = new WebSocket(baseUrl.replace('http', 'ws'))

webSocket.addEventListener('open', () => {
  webSocket.send(JSON.stringify({ message: 'ping' }))
})

webSocket.addEventListener('message', (event) => {
  pingPong = destr(event.data)?.message
})

onMounted(fetchMessageFromServer)
</script>

<template>
  <Suspense>
    <div>
      <Message :message="pingPong" />
      <Message :message="message" />
    </div>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
