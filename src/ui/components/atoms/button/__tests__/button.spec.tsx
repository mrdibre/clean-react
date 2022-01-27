import { render } from "@testing-library/react";

import { Button } from "../button.component";
import { ButtonProps } from "../button.types";

const makeSut = (props: ButtonProps) => render(<Button {...props} />);

describe("Button", () => {
  it("Should match snapshot", () => {
    const { container } = makeSut({ label: "label" });

    expect(container).toMatchSnapshot();
  });
});
