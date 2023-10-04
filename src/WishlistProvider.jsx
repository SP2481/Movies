import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "./firebase";

const ListContext = createContext();
export function ListProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addtoWatchlist = async (userId, movieData) => {
    try {
      const wishlistRef = collection(db, `user/${userId}/movies`);
      await addDoc(wishlistRef, movieData);
      console.log("Movie added to wishlist successfully.");
    } catch (error) {
      console.error("Error adding movie to wishlist:", error);
    }
  };

  const removefromWishlist = async (userId, movieID) => {
    try {
      const wishlistRef = collection(db, `user/${userId}/movies`);
      console.log(wishlistRef);
      const querySnapshot = await getDocs(wishlistRef);
      let documentid;
      querySnapshot.docs.map((doc) => {
        let data = doc.data();
        let docid = doc.id;
        if (data.id === movieID) {
          documentid = docid;
        }
      });
      const Docref = doc(wishlistRef, documentid);
      console.log(Docref);
      await deleteDoc(Docref);
      console.log("removed successfully");
    } catch (err) {
      console.log("Could'nt remove :- ", err);
    }
  };
  return (
    <ListContext.Provider
      value={{ addtoWatchlist, wishlist, setWishlist, removefromWishlist }}
    >
      {children}
    </ListContext.Provider>
  );
}

export function UselistContext() {
  return useContext(ListContext);
}
