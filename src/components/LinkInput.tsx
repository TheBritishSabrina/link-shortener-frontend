import { useState } from "react";

export default function LinkInput(): JSX.Element {
  const [newLink, setNewLink] = useState<string>("");

  const handleClick = async () => {
    // fetch POST to db
    setNewLink("");
  };

  return (
    <div>
      <h2>Paste your link below</h2>
      <input value={newLink} onChange={(e) => setNewLink(e.target.value)} />
      <p> </p>
      <button disabled={!newLink} onClick={handleClick}>
        Shorten
      </button>
    </div>
  );
}
