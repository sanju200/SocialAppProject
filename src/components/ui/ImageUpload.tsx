import { XIcon } from "lucide-react";
import React from "react";

interface ImageUpload {
  onChange: (url: string) => void;
  value: string;
  endPoint: "postImage";
}

function ImageUpload({ value, endPoint, onChange }: ImageUpload) {
  if (value) {
    return (
      <div className="relative size-40">
        <img
          src={value}
          alt="Upload"
          className="rounded-md size-40 object-cover"
        />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return <div>
    
  </div>;
}

export default ImageUpload;
