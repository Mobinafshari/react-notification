import { render, screen } from '@testing-library/react'
import App from "../src/App";
import userEvent from "@testing-library/user-event";

describe("notification", () => {
  it("should have button for trigger notification", () => {
    render(<App />);
    const trigger = screen.getByRole("button");
    expect(trigger).toBeInTheDocument()
  });
  it("should not have toast", () => {
    render(<App />);
    const notification = screen.queryByRole("alert");
    expect(notification).not.toBeInTheDocument()
  });
  it("trigger toast", async() => {
    render(<App />);
    const trigger = screen.getByRole("button");
    const user = userEvent.setup()
    await user.click(trigger);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
