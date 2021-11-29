import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={"Thiago Pereira"}>
        <ChannelContext.Provider
          value={"Codevolution on Youtube"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
