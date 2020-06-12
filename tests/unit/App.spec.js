import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const state = {
  salary: {
    employee: '3000',
    employer: '3000'
  },
  weather: {
    temperature: '',
    pending: false,
    failed: false
  }
}

const $store = {
  state,
  commit: jest.fn(),
  dispatch: jest.fn()
}

const $route = {
  path: 'path'
}

describe('App.vue', () => {
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallowMount(App, {
      mocks: { $store, $route },
      stubs: ['router-link', 'router-view']
    })
  })

  it('shows modal if both salaries are filled', () => {
    const areSalariesFilled = wrapper.vm.areSalariesFilled
    expect(areSalariesFilled).toBe(true)
  })

  it('hides modal if a salary is not filled', () => {
    const salaries = { employee: '', employer: '3000' }
    const localStore = { ...$store, state: { ...state, salary: salaries } }

    wrapper = shallowMount(App, {
      mocks: { $store: localStore, $route },
      stubs: ['router-link', 'router-view']
    })

    const areSalariesFilled = wrapper.vm.areSalariesFilled
    expect(areSalariesFilled).toBe(false)
  })

  it('shows success if salaries match', () => {
    const text = wrapper.vm.getMatchText
    expect(text).toBe('Success')
  })

  it('shows failure if salaries don\'t match', () => {
    const salaries = { employee: '4000', employer: '3000' }
    const localStore = { ...$store, state: { ...state, salary: salaries } }

    wrapper = shallowMount(App, {
      mocks: { $store: localStore, $route },
      stubs: ['router-link', 'router-view']
    })

    const text = wrapper.vm.getMatchText
    expect(text).toBe('Failure')
  })

  it('calls get weather on modal open', () => {
    wrapper.vm.handleModalOpen()
    const mockCall = $store.dispatch.mock.calls
    expect(mockCall[0]).toEqual(['getWeather'])
  })

  it('calls reset salaries', () => {
    wrapper.vm.handleModalClose()
    const mockCall = $store.commit.mock.calls
    expect(mockCall[0]).toEqual(['resetSalary'])
  })
})
