import { useEffect, useState } from "react";
import { ILink } from "../interfaces/ILink";

type PropType = {
  newLink: string;
};

export default function LinkList(props: PropType): JSX.Element {
  const [linkList, setLinkList] = useState<ILink[]>();

  const getLinks = async () => {
    try {
      const response = await fetch(
        "https://warm-brushlands-45153.herokuapp.com/"
      );
      const jsonData = await response.json();
      setLinkList(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLinks();
  }, [props.newLink]);

  return (
    <section className="link-list">
      {linkList && (
        <>
          <h2>Past links</h2>
          <ul>
            {linkList.map((element, index) => (
              <li key={index} className="link">
                <a href={element.newlink}>{element.newlink} </a> -{" "}
                <a href={element.oldlink}>{element.oldlink}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
