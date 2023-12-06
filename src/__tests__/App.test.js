import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";



test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  
it("displays a picture with alt text", ()=>{
    render(<App />);
    const image = screen.getByAltText("My profile pic");
    expect(image).toHaveAttribute("src", "https://media.licdn.com/dms/image/D5635AQGamOtd_R5j0A/profile-framedphoto-shrink_200_200/0/1686838336703?e=1702483200&v=beta&t=qhIPt21kWWZ-NWyJyJEG_9iEiC_PHm6BsGCII1Dimc4");
})  
it("has an About Me section", ()=>{
    render(<App />);
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutMeHeading).toBeInTheDocument();
})  
it("links to github", ()=>{
    render(<App />);
    const githubLink = screen.getByRole("link", {
        name: /github/i,
    });
    expect(githubLink).toHaveAttribute(
        "href",
        expect.stringContaining("https://github.com/jeffmanhart")
      );
})  
it("links to LinkedIn", ()=>{
    render(<App />);
    const linkedinLink = screen.getByRole("link", {
        name: /linkedin/i,
      });
    expect(linkedinLink).toHaveAttribute("href",
    expect.stringContaining("https://www.linkedin.com/in/jeff-manhart-03a73412/")
    );
})  
it("displays a paragraph of biography", ()=>{
    render(<App />);
    const bio = screen.getByText(/tester by trade/i);
    expect(bio).toBeInTheDocument();
})  