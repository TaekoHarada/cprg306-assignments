import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

// retrieves all items for a specific user from Firestore.
// It takes a userId as a parameter, and uses it to query a subcollection named items under a document in the users collection with the same userId.
// It fetches the documents in the items subcollection, and for each document, it adds an object to the items array containing the document ID and data. It then returns this items array.
export const getItems = async (userId) => {
  const items = [];

  const userDocRef = doc(db, "users", userId);

  const itemsSubCollectionRef = collection(userDocRef, "items");

  try {
    const querySnapshot = await getDocs(itemsSubCollectionRef);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error getItems: ", error);
  }

  return items;
};

// This function adds a new item to a specific user's list of items in Firestore. It takes a userId and an item as parameters. It uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. It returns the id of the newly created document.
export const addItem = async (userId, item) => {
  try {
    const userDocRef = doc(db, "users", userId);

    const itemsCollectionRef = collection(userDocRef, "items");

    const docRef = await addDoc(itemsCollectionRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error addItem: ", error);
    throw error;
  }
};
