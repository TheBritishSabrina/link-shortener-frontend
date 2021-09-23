import { useState } from "react";

export default function LinkInput(): JSX.Element {
  const [newLink, setNewLink] = useState<string>("");
  const [shortenedLink, setShortenedLink] = useState<string>("");

  const handleClick = async () => {
    try {
      const body = { input: newLink };

      const response = await fetch(
        "https://warm-brushlands-45153.herokuapp.com/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // do we need this line?
          body: JSON.stringify(body),
        }
      );
      const jsonBody = await response.json();
      setShortenedLink(jsonBody.newlink);
      console.log(jsonBody);
      // DO SOMETHING WITH THE RESPONSE - show new link
    } catch (err) {
      console.log(err);
    }

    setNewLink(""); // should I wait to do this? the async should handle it, right?
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
