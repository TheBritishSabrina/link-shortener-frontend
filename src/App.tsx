import AppHeader from "./components/AppHeader";
import LinkInput from "./components/LinkInput";
import LinkList from "./components/LinkList";

function App(): JSX.Element {
  return (
    <main>
      <AppHeader />
      <LinkInput />
      <LinkList />
    </main>
  );
}

export default App;
