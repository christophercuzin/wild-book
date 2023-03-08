
import './App.css';
import WilderCard from "./components/WilderCard"
import { wildersData } from "./constant/wildersData"

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {
            wildersData.map((wilder) => {
              return <WilderCard wilder={ wilder } />
            })
          }
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
