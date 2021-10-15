import { CameraIcon } from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "stores/store";

const PostCreateImage = () => {
  const { selectedImageToPost, selectImageToPost, removeImageToPost } =
    useStore().postStore;

  const filePickerRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={filePickerRef}
        type="file"
        hidden
        onChange={selectImageToPost}
      />

      {!selectedImageToPost ? (
        <div
          onClick={() => filePickerRef.current?.click()}
          className="mx-auto flex items-center justify-center h-12 w-12 
          rounded-full bg-red-100 cursor-pointer"
        >
          <CameraIcon className="h-6 w-6 text-red-600" area-hidden="true" />
        </div>
      ) : (
        <img
          className="w-full object-contain cursor-pointer"
          onClick={removeImageToPost}
          src={selectedImageToPost as string}
          alt="image"
        />
      )}
    </>
  );
};

export default observer(PostCreateImage);
