import BotCard from "./BotCard";


function BotGrid() {


const bots = [

{
name:"TOSH Alpha Bot",
strategy:"EMA crossover + Momentum",
payout:"High Payout Strategy",
icon:"⚡",
strength:82
},


{
name:"TOSH Quantum Bot",
strategy:"Bollinger + ATR volatility",
payout:"High Payout Strategy",
icon:"◉",
strength:88
},


{
name:"TOSH Velocity Bot",
strategy:"Tick speed momentum",
payout:"Risk Management",
icon:"➤",
strength:71
},


{
name:"TOSH Phantom Bot",
strategy:"Pattern reversal engine",
payout:"Risk Management",
icon:"👁",
strength:68
},


{
name:"TOSH Nova Bot",
strategy:"Support resistance breakout",
payout:"Risk Management",
icon:"◆",
strength:76
},


{
name:"TOSH Titan Bot",
strategy:"50 tick trend filter",
payout:"Risk Management",
icon:"♜",
strength:79
},


{
name:"TOSH Matrix Bot",
strategy:"EMA + ATR + Momentum",
payout:"High Payout Strategy",
icon:"▦",
strength:91
},


{
name:"TOSH Elite Bot",
strategy:"Adaptive multi-layer strategy",
payout:"High Payout Strategy",
icon:"♛",
strength:85
}


];



return (

<div className="bot-grid">

{bots.map((bot,index)=>(

<BotCard
key={index}
{...bot}
/>

))}


</div>

);


}


export default BotGrid;
