import { Dialog } from "@headlessui/react";
import Modal from "components/modal/Modal";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "stores/store";
import FeedCreateButton from "./FeedCreateButton";
import PostCreateImage from "./PostCreateImage";

const FeedCreate = () => {
  const { selectImageToPost, caption, setCaption } = useStore().postStore;
  const filePickerRef = useRef<HTMLInputElement>(null);

  return (
    <Modal>
      <PostCreateImage filePickerRef={filePickerRef} />

      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
        >
          Upload a photo
        </Dialog.Title>

        <input
          ref={filePickerRef}
          type="file"
          hidden
          onChange={selectImageToPost}
        />

        <div className="mt-2">
          <input
            className="border-none focus:ring-0 w-full text-center"
            type="text"
            placeholder="Please enter a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
      </div>

      <FeedCreateButton />
    </Modal>
  );
};

export default observer(FeedCreate);
