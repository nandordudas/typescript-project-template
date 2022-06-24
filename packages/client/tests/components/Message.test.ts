import { mount } from '@vue/test-utils'
import Message from '../../src/components/Message.vue'

describe('Message.vue', () => {
  it('should mount Message component', async () => {
    expect(Message).toBeTruthy()

    const wrapper = mount(Message, {
      props: {
        message: 'Hello',
      },
    })

    expect(wrapper.text()).toContain('Hello')
  })
})
