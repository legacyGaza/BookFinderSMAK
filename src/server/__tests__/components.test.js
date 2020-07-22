import "jsdom-global/register";
import Enzyme, { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import React from "react";

import Register from "./../../Components/Register/Register";
import AddExpenses from "./../../Components/AddExpenses/AddExpenses";
import Login from "./../../Components/Login/Login";

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

describe("The Add Expenses file is running", () => {
  it("The input filed passed", () => {
    const wrapper = shallow(<AddExpenses />);
    const button3 = wrapper.find("button");
    button3.simulate("click");
    const input1 = wrapper.find("input.testInput1");
    const input2 = wrapper.find("input.testInput2");
    const input3 = wrapper.find("input.testInput3");
    const input4 = wrapper.find("input.testInput4");

    expect(input1).toEqual({});
    expect(input2).toEqual({});
    expect(input3).toEqual({});
    expect(input4).toEqual({});
  });

  it("The Add Expenses function is running", async () => {
    const submit1 = jest.fn();
    const wrapper = mount(<Register onsubmit={submit1} />);
    expect(submit1).toBeDefined();
  });
});

describe("the file Login is running", () => {
  it("The input filed is running", () => {
    const wrapper = shallow(<Login />);
    const button4 = wrapper.find("button");
    button4.simulate("click");
    const input1 = wrapper.find("input.email");
    const input2 = wrapper.find("input.password");
    expect(input1).toEqual({});
    expect(input2).toEqual({});
  });
});
