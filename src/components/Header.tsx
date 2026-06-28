import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import DisciplineModal from "./DisciplineModal";
import { loginWithDeriv, checkLogin } from "../deriv/auth";


function Header(){

const [showRules,setShowRules] = useState(false);

const [logged,setLogged] = useState(false);

const [account,setAccount] = useState("");



useEffect(()=>{


const status = checkLogin();


const token =
localStorage.getItem("deriv_token");


const acc =
localStorage.getItem("deriv_account");


if(status || token){

setLogged(true);

setAccount(acc || "Demo");

}


},[]);




return (

<>


<header className="header">


<div className="brand">


<motion.div

className="brand-logo"

animate={{
boxShadow:[
"0 0 10px #d4af37",
"0 0 30px #d4af37",
"0 0 10px #d4af37"
]
}}

transition={{
duration:2,
repeat:Infinity
}}

>

◈

</motion.div>



<h2>
TOSH PREMIUM BOT
</h2>


</div>



<div className="header-actions">



<button

className="shield"

onClick={()=>setShowRules(true)}

>

<Shield size={22}/>

</button>




{logged ? (


<div className="account">

🟢 Live Sync

<br/>

Account: {account}

</div>



) : (


<>


<button

className="login"

onClick={loginWithDeriv}

>

Login

</button>



<a

className="signup"

href="https://partner-tracking.deriv.com/click?a=31609&o=1&c=3&link_id=1"

>

Sign Up

</a>


</>


)}



</div>



</header>



{showRules &&

<DisciplineModal

close={()=>setShowRules(false)}

/>

}


</>

);


}


export default Header;
