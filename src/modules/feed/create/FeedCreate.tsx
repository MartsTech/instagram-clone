import { Dialog } from "@headlessui/react";
import Modal from "components/modal/Modal";
import FeedCreateButton from "./FeedCreateButton";
import FeedCreateInput from "./FeedCreateInput";
import PostCreateImage from "./PostCreateImage";

const FeedCreate = () => {
  return (
    <Modal>
      <PostCreateImage />
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
        >
          Upload a photo
        </Dialog.Title>
        <FeedCreateInput />
      </div>
      <FeedCreateButton />
    </Modal>
  );
};

export default FeedCreate;
