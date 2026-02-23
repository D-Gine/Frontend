import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Text from "./Text";
import { describe } from "node:test";

expect.extend(toHaveNoViolations);

describe("Text accessibility", () => {
  it("should not have accessibility violations", async () => {
    const { container } = render(<Text>test</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
