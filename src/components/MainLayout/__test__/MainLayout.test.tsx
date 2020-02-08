import React from "react";
import { shallow } from "enzyme";

import { MainLayout } from "../MainLayout";

it('should match snapshot', () => {
  const children= <span>Test</span>;
const component = shallow<typeof MainLayout>(<MainLayout>{children}</MainLayout>);

expect(component).toMatchSnapshot()
});