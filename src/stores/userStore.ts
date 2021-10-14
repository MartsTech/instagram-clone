import { auth } from "config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { User } from "types/user";
import { resetStore } from "./store";

class UserStore {
  user: User | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signInGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  signOut = () => {
    if (this.user) {
      signOut(auth);
      resetStore();
    }
  };

  setUser = (user: FirebaseUser | null) => {
    if (user) {
      this.user = {
        email: user.email!,
        displayName: user.displayName!.split(" ").join("_").toLocaleLowerCase(),
        photoURL: user.photoURL,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  };
}

export default UserStore;
