import { shallowMount } from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score.vue', () => {
  let wrapper
  let courseData

  beforeEach(() => {
    courseData = {
      course: 'Roots Disc Golf Course',
      date: 'October 26, 2018',
      score: 77,
      par: 63
    }

    wrapper = shallowMount(Score, {
      propsData: courseData
    })
  })

  it('has an associated course', () => {
    const course = wrapper.find('.course')
    expect(course.text()).toContain(courseData.course)
  })

  it('has an associated date', () => {
    const date = wrapper.find('.date')
    expect(date.text()).toContain(courseData.date)
  })

  it('has a score', () => {
    const score = wrapper.find('.score')
    expect(score.text()).toContain(courseData.score)
  })

  it('has a course par', () => {
    const par = wrapper.find('.par')
    expect(par.text()).toContain(courseData.par)
  })

})
