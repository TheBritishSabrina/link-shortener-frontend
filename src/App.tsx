import AppHeader from "./components/AppHeader";
import LinkInput from "./components/LinkInput";
import LinkList from "./components/LinkList";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <AppHeader />
      <LinkInput />
      <LinkList />
    </div>
  );
}

export default App;
