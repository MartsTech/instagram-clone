import { CameraIcon } from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface PostCreateImageProps {
  filePickerRef: React.RefObject<HTMLInputElement>;
}

const PostCreateImage: React.FC<PostCreateImageProps> = ({ filePickerRef }) => {
  const { selectedImageToPost, removeImageToPost } = useStore().postStore;

  if (selectedImageToPost) {
    return (
      <img
        className="w-full object-contain cursor-pointer"
        onClick={removeImageToPost}
        src={selectedImageToPost as string}
        alt="image"
      />
    );
  }

  return (
    <div
      onClick={() => filePickerRef.current?.click()}
      className="mx-auto flex items-center justify-center h-12 w-12 
      rounded-full bg-red-100 cursor-pointer"
    >
      <CameraIcon className="h-6 w-6 text-red-600" area-hidden="true" />
    </div>
  );
};

export default observer(PostCreateImage);
