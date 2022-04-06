import React, { useState } from "react";
import ContactButton from "./app/contact/components/button/ContactButton";
import ProfileList from "./app/profiles/components/ProfileList";
import ScrapperSearch from "./app/scrapper/components/ScrapperSearch";

function App() {
  const [search, setSearch] = useState(true);

  return (
    <div className="App px-5 py-4">
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={() => setSearch(true)}
        >
          Búsqueda de perfiles
        </button>

        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={() => setSearch(false)}
        >
          Listado de perfiles
        </button>
      </div>

      {search ? <ScrapperSearch /> : <ProfileList />}

      <ContactButton />
    </div>
  );
}

export default App;
