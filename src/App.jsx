import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SingleUserDetails from "./components/SingleUserDetails/SingleUserDetails";
import React, { useState } from "react";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      {featuredUser ? (
        <SingleUserDetails
          setFeaturedUser={setFeaturedUser}
          featuredUser={featuredUser}
        />
      ) : (
        <ContactList setFeaturedUser={setFeaturedUser} />
      )}
    </>
  );
}

export default App;
