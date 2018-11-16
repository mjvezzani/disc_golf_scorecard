import { shallowMount } from '@vue/test-utils'
import Hole from '@/components/Hole.vue'

describe('Hole.vue', () => {
  let wrapper
  let holeData

  beforeEach(() => {
    holeData = {
      par: 3,
      distance: 387,
    }

    wrapper = shallowMount(Hole, {
      propsData: holeData
    })
  })

  it('has a par value', () => {
    const par = wrapper.find('.par')
    expect(par.text()).toContain(holeData.par)
  })

  it('has a distance value', () => {
    const distance = wrapper.find('.distance')
    expect(distance.text()).toContain(holeData.distance)
  })

  it('has a score input field', () => {
    const score = wrapper.find('.score')
    score.setValue('phubar')
    expect(score.element.value).toBe('foobar')
  })
  
  it('gets the score from the input field when a value is entered', () => {

  })
})
