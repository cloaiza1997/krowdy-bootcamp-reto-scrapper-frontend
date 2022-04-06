import React from "react";
import ContactButton from "./app/contact/components/button/ContactButton";
import ScrapperSearch from "./app/scrapper/components/ScrapperSearch";

function App() {
  return (
    <div className="App">
      <ScrapperSearch />

      <ContactButton />
    </div>
  );
}

export default App;
