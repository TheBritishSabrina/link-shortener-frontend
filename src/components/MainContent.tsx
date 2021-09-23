import { useState } from "react";
import LinkInput from "./LinkInput";
import LinkList from "./LinkList";

export default function MainContent(): JSX.Element {
  const [newLink, setNewLink] = useState<string>("");

  return (
    <main>
      <LinkInput />
      <LinkList />
    </main>
  );
}
