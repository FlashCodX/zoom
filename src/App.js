import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
function App() {
  return (
    <div className="App">
      <Tabs />
      <Header title={"Latest in "} description={"Newsfeed"} link={"#"} />
      <header className="App-header"></header>
      <Cards />
    </div>
  );
}

export default App;
