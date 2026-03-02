import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Button from "./Button";
import { describe } from "node:test";

expect.extend(toHaveNoViolations);

describe("Text accessibility", () => {
  it("should not have accessibility violations", async () => {
    const { container } = render(<Button on_click={() => {}}>test</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
