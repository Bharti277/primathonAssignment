import React, { useState } from "react";
export const DataContext = React.createContext();
const API_URL = "https://randomuser.me/api/?results=50";

export const DataProvider = (props) => {
  const [data, setData] = useState(API_URL);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
