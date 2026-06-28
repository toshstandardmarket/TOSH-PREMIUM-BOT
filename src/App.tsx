import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BotGrid from "./components/BotGrid";
import Loader from "./components/Loader";
import ChartView from "./components/ChartView";


function App(){


const [loading,setLoading] =
useState(true);


const [page,setPage] =
useState("📊 Dashboard");



if(loading){

return (

<Loader
done={()=>setLoading(false)}
/>

);

}




return (

<div className="app">


<Header />


<Navigation />


<main className="dashboard">



{page==="📊 Dashboard" && (

<>

<h1>
DASHBOARD
</h1>


<BotGrid />

</>

)}



{page==="📈 Chart" && (

<ChartView />

)}



</main>


</div>

);


}


export default App;
