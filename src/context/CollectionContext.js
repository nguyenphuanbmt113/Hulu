import { createContext, useContext, useState } from "react";
const CollectionContext = createContext();
const CollectionContextProvider = ({ children }) => {
  const [listCollection, setListCollection] = useState([]);
  const handleCollection = (item) => {
    setListCollection((p) => [...p, item]);
    return;
  };
  const deleteCollection = (id) => {
    const newArr = listCollection.filter((item) => {
      return item.id !== id;
    });
    setListCollection(newArr);
  };
  console.log("listCollection:", listCollection);
  return (
    <CollectionContext.Provider
      value={{ listCollection, handleCollection, deleteCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};
const Collection = () => {
  return useContext(CollectionContext);
};
export { CollectionContextProvider, Collection };
