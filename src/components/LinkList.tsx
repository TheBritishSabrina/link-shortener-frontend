import { useEffect, useState } from "react";
import { ILink } from "../interfaces/ILink";

// const fakeData: ILink[] = [
//   {
//     id: 1,
//     oldLink: "someoldlink.com",
//     newLink: "somenewlink.com",
//   },
//   {
//     id: 2,
//     oldLink: "someotheroldlink.com",
//     newLink: "someothernewlink.com",
//   },
// ];

export default function LinkList(): JSX.Element {
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
  }, []);

  return (
    <section>
      {linkList && (
        <>
          <h2>Past links</h2>
          <ul>
            {linkList.map((element, index) => (
              <li key={index} className="link">
                <a href={element.newLink}>{element.newLink} </a> -{" "}
                <a href={element.oldLink}>{element.oldLink}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
