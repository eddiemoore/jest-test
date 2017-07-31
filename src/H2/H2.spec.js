import React from 'react'
import { shallow } from 'enzyme'
import H2 from './'

it('H2 test', () => {
  const wrapper = shallow(<H2 />)
  expect(wrapper.type()).toBe('h2')
})
