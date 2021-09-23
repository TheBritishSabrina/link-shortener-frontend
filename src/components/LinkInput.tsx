import { useState } from "react";

type PropType = {
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function LinkInput(props: PropType): JSX.Element {
  const [shortenedLink, setShortenedLink] = useState<string>("");

  const newLink = props.newLink;

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
    } catch (err) {
      console.log(err);
    }

    props.setNewLink(""); // should I wait to do this? the async should handle it, right?
  };

  return (
    <div className="link-input">
      <h2>Paste your link below</h2>
      <p>
        <i>Please use the format https://...</i>
      </p>
      <input
        value={newLink}
        onChange={(e) => props.setNewLink(e.target.value)}
      />
      <p> </p>
      <button disabled={!newLink} onClick={handleClick}>
        Shorten
      </button>
      {shortenedLink && (
        <p>
          Success! Your new shortened link is:{" "}
          <a href={shortenedLink}>{shortenedLink}</a>
        </p>
      )}
    </div>
  );
}
