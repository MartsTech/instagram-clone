import { makeAutoObservable } from "mobx";

class CommonStore {
  modalOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setModalOpen = (state: boolean) => {
    this.modalOpen = state;
  };
}

export default CommonStore;
