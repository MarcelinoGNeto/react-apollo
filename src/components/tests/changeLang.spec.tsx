import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChangeLanguage } from "../changeLang";
import i18n from "../../dictionary/i18nextConfig";

jest.mock("../../dictionary/i18nextConfig", () => ({
  changeLanguage: jest.fn(),
}));

describe("ChangeLanguage component", () => {
  test("renders ChangeLanguage component", () => {
    render(<ChangeLanguage />);
    const ptButton = screen.getByText("PT");
    const enButton = screen.getByText("EN");
    expect(ptButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
  });

  test("calls changeLanguage when PT button is clicked", () => {
    render(<ChangeLanguage />);
    const ptButton = screen.getByText("PT");
    fireEvent.click(ptButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("pt");
  });

  test("calls changeLanguage when EN button is clicked", () => {
    render(<ChangeLanguage />);
    const enButton = screen.getByText("EN");
    fireEvent.click(enButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("en");
  });
});
