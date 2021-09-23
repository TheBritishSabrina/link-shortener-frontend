import AppHeader from "./components/AppHeader";
import "./App.css";
import MainContent from "./components/MainContent";

function App(): JSX.Element {
  return (
    <div className="App">
      <AppHeader />
      <MainContent />
    </div>
  );
}

export default App;
