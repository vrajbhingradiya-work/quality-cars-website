"use client";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";

function ImageInputWithCompressionAndUpload({
  setPropData,
  propData,
  imageSize = 4,
}: any) {
  // to do:
  //01- take input of images.  ---done
  //02- defining a function for uploading single image ---done
  //02A- define a function to compress imageFile  ---done
  //03- compress them & upload them  ---done
  //04- with every upload append the response object into ImageLinksArray.
  //05- create two buttons one to choose files and one to upload the images.
  //06- once the user clicks upload files. the edit option stays hidden and a progress bar appears.
  //07- once the progress is 100% ? show the preview of image uploaded.
  //08- also give the user an option to delete the uploaded image.

  //00= states defining:
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0); // For progress bar

  //01= input for images :
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);

      // Validate file types
      const validExtensions = [".jpg", ".jpeg", ".png"];
      const validFiles = filesArray.filter((file) => {
        const extension = file.name.split(".").pop()?.toLowerCase();
        return validExtensions.includes(`.${extension}`);
      });

      if (validFiles.length === filesArray.length) {
        setSelectedFiles(validFiles);
      } else {
        alert("Only .jpg, .jpeg, and .png files are allowed.");
        event.target.value = "";
      }
    }
  };

  //02= Function to upload a single image to IMGBB
  const uploadSingleImage = async (file: File) => {
    const apiKey = "4b65b56bbd59046a87e479f9e65181b3"; // Replace with your actual IMGBB API key
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("response recieved :", result);
        console.log(`Image uploaded successfully: ${result.data.url}`);
        return result;
      } else {
        console.error(`Upload failed:`, result);
        return null;
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      return null;
    }
  };

  //02A= function to compress image
  const compressImage = async (file: File): Promise<File | null> => {
    const options = {
      maxSizeMB: 4, // Maximum size in MB
      maxWidthOrHeight: 1920, // Max width or height in pixels
      useWebWorker: true, // Use web worker to reduce blocking
      initialQuality: 0.8, // Initial quality setting (0 to 1)
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(`Compressed ${file.name}:`, compressedFile);
      return compressedFile;
    } catch (error) {
      console.error("Error compressing image:", error);
      return null; // Return null if compression fails
    }
  };

  //03= image compression and uploading +
  const uploadImages = async () => {
    console.log("Images are compressing and uploading...");
    const uploadedImages = []; // To store the uploaded images

    setUploadProgress(0); // Reset progress bar
    const totalFiles = selectedFiles.length;
    let completed = 0;

    for (const file of selectedFiles) {
      // Compress the image file:
      const compressedFile = await compressImage(file);

      if (compressedFile && compressedFile.size / 1024 / 1024 < imageSize) {
        const imageResponse = await uploadSingleImage(compressedFile);
        if (imageResponse) {
          uploadedImages.push(imageResponse); // Add uploaded image to array
        }
      } else {
        console.error(`${file.name} is still too large after compression.`);
      }

      // Update progress
      completed += 1;
      setUploadProgress((completed / totalFiles) * 100);
    }

    // Now that all images are uploaded, update propData with the new image data
    setPropData({ ...propData, images: uploadedImages });
    console.log("Updated propData with images:", {
      ...propData,
      images: uploadedImages,
    });
  };

  //04 = appending the image links array.

  return (
    <div className="p-8 text-white rounded-xl flex flex-col gap-2 border-white border-2 m-12">
      <label htmlFor="imageInput">Upload Images</label>
      <input
        type="file"
        id="imageInput"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={handleFileChange}
      />
      <ul className="mt-2 border-1 border-white">
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      <button
        onClick={uploadImages}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
      <button
        onClick={() => {
          setPropData({ ...propData, images: [] });
          setUploadProgress(0);
        }}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Reset
      </button>
      <div className="mt-4">
        <div
          className={`bg-blue-500 text-white h-2 rounded w-[${uploadProgress}%] `}
        ></div>
        <p className="text-sm mt-1">{Math.round(uploadProgress)}% Complete</p>
      </div>
    </div>
  );
}

export default ImageInputWithCompressionAndUpload;
