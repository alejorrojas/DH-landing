import { render, screen } from "@testing-library/react";
import App, { Data } from "../pages/index";


describe("App", () => {
  it("renders without crashing", () => {
    render(<App data={[]} />);
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
  });
});