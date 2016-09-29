import React             from 'react'
import ReactDOM          from 'react-dom'
import { mount }         from 'enzyme'
import { Foo, Bar, Baz } from './App'

describe("<Foo>", () => {
  it("renders 'Foo'", () => {
    const wrapper = mount(<Foo/>)
    console.log(wrapper.debug())
    expect(wrapper.find(Foo).text()).toBe("Foo")
  })
})

describe("<Bar>", () => {
  it("renders 'Bar'", () => {
    const wrapper = mount(<Bar/>)
    console.log(wrapper.debug())
    expect(wrapper.find(Bar).text()).toBe("Bar")
  })
})

describe("<Baz>", () => {
  it("renders 'Foo'", () => {
    const wrapper = mount(<Baz/>)
    console.log(wrapper.debug())
    expect(wrapper.find(Foo).text()).toBe("Foo")
  })
})
