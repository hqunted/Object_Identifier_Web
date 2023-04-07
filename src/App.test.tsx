import { render, screen, fireEvent } from "@testing-library/react";
import { HandleImageUpload } from "./components/HandleImageUpload";

describe("HandleImageUpload", () => {
  it("renders without errors", () => {
    render(<HandleImageUpload />);
    expect(screen.getByText("Triangle Analyzer")).toBeInTheDocument();
  });

  it("allows user to select and upload an image", async () => {
    render(<HandleImageUpload />);

    // Check that no image is initially displayed
    expect(screen.queryByAltText("uploaded")).not.toBeInTheDocument();

    // Click the "Upload Image" button
    const uploadButton = screen.getByText("Upload Image");
    fireEvent.click(uploadButton);

    // Select a file to upload
    const file = new File(["test"], "test.png", { type: "image/png" });
    const fileInput = screen.getByLabelText("Upload Image");
    Object.defineProperty(fileInput, "files", { value: [file] });
    fireEvent.change(fileInput);

    // Wait for image to be displayed
    const uploadedImage = await screen.findByAltText("uploaded");
    expect(uploadedImage).toBeInTheDocument();
  });
});
