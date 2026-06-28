type BotProps = {
  name: string;
  strategy: string;
  payout: string;
  icon: string;
};


function BotCard({
  name,
  strategy,
  payout,
  icon
}: BotProps) {

  return (
    <div className="bot-card">

      <div className="bot-icon">
        {icon}
      </div>

      <h3>
        {name}
      </h3>

      <p>
        {strategy}
      </p>


      <div className="market">

        <span>
          Market Strength
        </span>

        <div className="bar">

          <div className="fill">
          </div>

        </div>

        <small>
          {payout}
        </small>

      </div>


      <button>
        LOAD BOT
      </button>


    </div>
  );
}


export default BotCard;
