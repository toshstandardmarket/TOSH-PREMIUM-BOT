import BotCard from "./BotCard";


function BotGrid() {

  const bots = [

    {
      name: "TOSH Alpha Bot",
      strategy: "EMA crossover + Momentum",
      payout: "⚡ High Payout",
      icon: "⚡"
    },

    {
      name: "TOSH Quantum Bot",
      strategy: "Bollinger + ATR volatility",
      payout: "⚡ High Payout",
      icon: "◉"
    },

    {
      name: "TOSH Velocity Bot",
      strategy: "Tick speed momentum",
      payout: "Risk Managed",
      icon: "➤"
    },

    {
      name: "TOSH Phantom Bot",
      strategy: "Pattern reversal engine",
      payout: "Risk Managed",
      icon: "👁"
    },

    {
      name: "TOSH Nova Bot",
      strategy: "Support resistance breakout",
      payout: "Risk Managed",
      icon: "◆"
    },

    {
      name: "TOSH Titan Bot",
      strategy: "50 tick trend filter",
      payout: "Risk Managed",
      icon: "♜"
    },

    {
      name: "TOSH Matrix Bot",
      strategy: "EMA + ATR + Momentum",
      payout: "⚡ High Payout",
      icon: "▦"
    },

    {
      name: "TOSH Elite Bot",
      strategy: "Multi-layer adaptive strategy",
      payout: "⚡ High Payout",
      icon: "♛"
    }

  ];


  return (

    <div className="bot-grid">

      {bots.map((bot, index)=>(

        <BotCard
          key={index}
          {...bot}
        />

      ))}

    </div>

  );

}


export default BotGrid;
