import axios from "axios";

export const pingAPI = async (ResultImage: string) => {
  try {
    const formData = new FormData();
    const file = new File(
      [await fetch(ResultImage).then((r) => r.blob())],
      "image.jpg"
    );
    formData.append("image", file);

    const response = await axios.post(
      "http://localhost:5000/api/upload-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Handle response from server
    console.log(response.data);
  } catch (error) {
    // Handle error
    console.log(error);
  }
};
