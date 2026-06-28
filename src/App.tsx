import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BotGrid from "./components/BotGrid";


function App() {

  return (

    <div className="app">

      <Header />

      <Navigation />


      <main className="dashboard">

        <h1>
          DASHBOARD
        </h1>


        <p>
          Select your automated trading bot
        </p>


        <BotGrid />

      </main>


    </div>

  );

}


export default App;
