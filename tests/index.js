import test from "ava";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Image } from "../lib/esm/image";

configure({ adapter: new Adapter() });

const fakeUrl = "https://my.fake.image.com/image.png";
const loader = <div className="loader" />;

test("Should render nothing when not providing src, fallback or loader", (t) => {
  const wrapper = shallow(<Image />);

  t.true(wrapper.isEmptyRender());
});

test("Should show loader while preloading image", (t) => {
  const wrapper = shallow(<Image src={fakeUrl} loader={loader} />);

  t.false(wrapper.isEmptyRender());
  t.true(wrapper.equals(loader));
});
