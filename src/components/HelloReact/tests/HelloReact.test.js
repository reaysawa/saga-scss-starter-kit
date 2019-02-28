import React from "react"
import { shallow } from "enzyme"

import HelloReact from "../HelloReact"

describe("HelloReact renders", () => {
  it("the name Charles", () => {
    const wrapper = shallow(<HelloReact name={"Charles"} />)

    const charlesWasRendered = wrapper.html().indexOf("Charles") > -1
    expect(charlesWasRendered).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
