import { useState } from "react";
import { ILink } from "../interfaces/ILink";

const fakeData: ILink[] = [
  {
    id: 1,
    oldLink: "someoldlink.com",
    newLink: "somenewlink.com",
  },
  {
    id: 2,
    oldLink: "someotheroldlink.com",
    newLink: "someothernewlink.com",
  },
];

export default function LinkList(): JSX.Element {
  const [linkList, setLinkList] = useState<ILink[]>(fakeData);

  // useeffect to fetch link list from db

  return (
    <section>
      <h2>Past links</h2>
      {linkList.length > 0 && (
        <ul>
          {linkList.map((element, index) => (
            <li key={index} className="link">
              <a href={element.newLink}>{element.newLink} </a> -{" "}
              <a href={element.oldLink}>{element.oldLink}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
