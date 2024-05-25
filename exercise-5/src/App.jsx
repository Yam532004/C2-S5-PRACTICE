import Data from "./data";
import Card from "./components/Card";
function App() {
  return (
    <div className="cards-view">
      <div className="cards-grid">
        {Data.map((item) => (
          <Card card={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
