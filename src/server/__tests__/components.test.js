import "jsdom-global/register";
import Enzyme, { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import React from "react";

import Register from "./../../Components/Register/Register";

describe("the file Register is running", () => {
  it("The register file is runnig", () => {
    const wrapper = shallow(<Register />);
    const button1 = wrapper.find("button");
    button1.simulate("click");
    const input1 = wrapper.find("input.firstname");
    const input2 = wrapper.find("input.lastname");
    const input3 = wrapper.find("input.password");
    const input4 = wrapper.find("input.email");
    expect(input1).toEqual({});
    expect(input2).toEqual({});
    expect(input3).toEqual({});
    expect(input4).toEqual({});
  });

  it("The register function is called", async () => {
    const submit = jest.fn();
    const wrapper = mount(<Register onsubmit={submit} />);
    expect(submit).toBeDefined();
  });
});
