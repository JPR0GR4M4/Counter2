import { describe, expect, it } from "vitest";
import { App } from "../App";
import { render, screen, userEvent } from "../../test-config/utils";

describe("__AdaTest: App", () => {
  it("the counter can be incremented", async () => {
    render(<App />);

    await userEvent.click(screen.getByText("Increase"));

    expect(screen.getByText("Counter:1")).toBeInTheDocument();
    expect(screen.queryByText("Counter:0")).toBeNull();
    expect(screen.queryByText("Counter:-1")).toBeNull();
  });

  it("the counter can be decreased", async () => {
    render(<App />);

    await userEvent.click(screen.getByText("Decrease"));

    expect(screen.getByText("Counter:-1")).toBeInTheDocument();
    expect(screen.queryByText("Counter:1")).toBeNull();
    expect(screen.queryByText("Counter:0")).toBeNull();
  });

  it("the counter can be Increased and reset", async () => {
    render(<App />);

    await userEvent.click(screen.getByText("Increase"));

    expect(screen.getByText("Counter:1")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("Counter:0")).toBeInTheDocument();
    expect(screen.queryByText("Counter:1")).toBeNull();
    expect(screen.queryByText("Counter:-1")).toBeNull();
  });

  it("when the counter is greater than 3 the color is set from the service", async () => {
    render(<App />);

    await userEvent.click(screen.getByText("Increase"));
    await userEvent.click(screen.getByText("Increase"));
    await userEvent.click(screen.getByText("Increase"));

    const counter = screen.getByText("Counter:3");

    expect(counter).toBeInTheDocument();
    expect(counter.className).toEqual("blue");
    expect(screen.queryByText("Counter:1")).toBeNull();
    expect(screen.queryByText("Counter:-1")).toBeNull();
  });
});
