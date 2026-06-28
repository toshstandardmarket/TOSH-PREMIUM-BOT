import { Shield } from "lucide-react";


function DisciplineModal({
  close
}: {
  close:()=>void
}) {


return (

<div className="modal-bg">


<div className="discipline">


<Shield size={40}/>


<h2>
🛡 TOSH Systemic Discipline Protocol
</h2>



<ul>

<li>
Risk Capital Only: Trade only money you can afford to lose.
</li>

<li>
No Revenge Trading: Accept losses and let the system work.
</li>

<li>
Lock In Profits: Stop when your target is achieved.
</li>

<li>
Trust The Engine: Avoid restarting active strategies.
</li>

<li>
Active Oversight: Monitor trading during volatility.
</li>

<li>
Psychology First: Stop if emotions affect decisions.
</li>

</ul>



<button onClick={close}>
I Understand
</button>


</div>


</div>

);


}


export default DisciplineModal;
