import { render, screen } from "@testing-library/react";
import App  from "./App";

describe("Testing <App/> component", () => {
  it("Should render <App />", () => {
    render(<App />);
    expect(screen.getByText("Kelvin")).toBeInTheDocument()
  });
});
