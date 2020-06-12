import { mount } from '@vue/test-utils'
import SalaryForm from '@/views/SalaryForm.vue'

const $store = {
  state: {
    salary: {
      employee: ''
    }
  },
  commit: jest.fn()
}

const event = { preventDefault: () => {} }

describe('SalaryForm.vue', () => {
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = mount(SalaryForm, {
      propsData: { role: 'employee' },
      mocks: { $store }
    })
  })

  it('shows input initially', () => {
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
  })

  it('shows error if form is not valid', () => {
    wrapper.vm.salaryInput = '123cb'
    wrapper.vm.handleInput()
    expect(wrapper.vm.formError.isValid).toBe(false)
    expect(wrapper.vm.formError.message).toBe('This field accepts only numbers')

    wrapper.vm.salaryInput = ''
    wrapper.vm.handleInput()
    expect(wrapper.vm.formError.isValid).toBe(false)
    expect(wrapper.vm.formError.message).toBe('This field is required')
  })

  it('hides error if form is valid', () => {
    wrapper.vm.salaryInput = '123cb'
    wrapper.vm.handleInput()

    wrapper.vm.salaryInput = '40000'
    wrapper.vm.handleInput()

    expect(wrapper.vm.formError.isValid).toBe(true)
    expect(wrapper.vm.formError.message).toBe('')
  })

  it('sets employee salary if form is valid', () => {
    wrapper.vm.formError = { isValid: true }
    wrapper.vm.salaryInput = '3000'
    wrapper.vm.handleSubmit(event)

    const mockCall = $store.commit.mock.calls[0]
    expect(mockCall[0]).toBe('setSalary')
    expect(mockCall[1]).toEqual({ value: '3000', role: 'employee' })
  })

  it('hides input after setting employee salary', () => {
    const state = {
      salary: {
        employee: '3000'
      }
    }

    wrapper = mount(SalaryForm, {
      propsData: { role: 'employee' },
      mocks: { $store: { state } }
    })

    wrapper.vm.handleSubmit(event)
    const input = wrapper.find('input').exists()
    expect(input).toBe(false)
  })
})
