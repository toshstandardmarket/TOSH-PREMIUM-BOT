import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">

      <Header />

      <Navigation />

      <main className="dashboard">

        <h1>DASHBOARD</h1>

        <p>
          Real Deriv Automated Trading Terminal
        </p>

      </main>

    </div>
  );
}

export default App;
