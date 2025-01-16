import { render, screen } from '@testing-library/react'
import App from "../src/App";

describe("notification", () => {
  it("should", () => {
    render(<App />);
    const trigger = screen.getByRole("button");
    // const notification = screen.getByRole("alert");
    expect(trigger).toBeInTheDocument()
  });
});
