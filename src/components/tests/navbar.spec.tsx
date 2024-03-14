import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../navbar/index";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar component", () => {
  test("should render correctly", () => {
    renderNavbar();

    expect(screen.getByText("Home")).toBeInTheDocuments;

    const locationsLink = screen.getByText("Locations");
    expect(locationsLink).toBeInTheDocuments;

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocuments;
  });

  test("renders home, locations, and about links in mobile view", () => {
    renderNavbar();

    const menuIcon = screen.getByText("☰");
    fireEvent.click(menuIcon);
    const homeLink = screen.getByText("Home");
    const locationsLink = screen.getByText("Locations");
    const aboutLink = screen.getByText("About");
    expect(homeLink).toBeInTheDocument;
    expect(locationsLink).toBeInTheDocument;
    expect(aboutLink).toBeInTheDocument;
  });

  test("renders home, locations, about, and change language links in desktop view", () => {
    global.innerWidth = 1024;

    renderNavbar();

    const homeLink = screen.getByText("Home");
    const locationsLink = screen.getByText("Locations");
    const aboutLink = screen.getByText("About");
    expect(homeLink).toBeInTheDocument;
    expect(locationsLink).toBeInTheDocument;
    expect(aboutLink).toBeInTheDocument;
  });
});
