import { shallowMount } from '@vue/test-utils'
import WeatherWidget from '@/components/WeatherWidget.vue'

describe('WeatherWidget.vue', () => {
  const propsData = {
    temperature: '17.5',
    place: 'London'
  }

  it('shows the temperature in a place', () => {
    const wrapper = shallowMount(WeatherWidget, { propsData })

    const text = wrapper.text()
    expect(text).toMatch('The weather in London is:')
    expect(text).toMatch('17.5')
  })

  it('shows error message', () => {
    const wrapper = shallowMount(WeatherWidget, {
      propsData: { ...propsData, failed: true }
    })

    const text = wrapper.text()
    expect(text).toMatch('Opps')
  })

  it('shows pending message', () => {
    const wrapper = shallowMount(WeatherWidget, {
      propsData: { ...propsData, isLoading: true }
    })

    const text = wrapper.text()
    expect(text).toMatch('...')
  })
})
