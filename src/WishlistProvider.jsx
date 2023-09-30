import { addDoc, collection } from "firebase/firestore";
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
  return (
    <ListContext.Provider value={{ addtoWatchlist, wishlist, setWishlist }}>
      {children}
    </ListContext.Provider>
  );
}

export function UselistContext() {
  return useContext(ListContext);
}
