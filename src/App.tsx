import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BotGrid from "./components/BotGrid";
import Loader from "./components/Loader";


function App() {

  const [loading, setLoading] = useState(true);


  if (loading) {

    return (
      <Loader
        done={() => setLoading(false)}
      />
    );

  }


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
