type Props = {
  page:string;
  setPage:(page:string)=>void;
};


function Navigation({
  page,
  setPage
}:Props){


const tabs = [

"📊 Dashboard",
"🤖 Bot Builder",
"📈 Chart",
"📊 Analysis",
"⚡ Free Bot"

];


return (

<nav className="navigation">


{tabs.map(tab=>(


<button

key={tab}

className={
page===tab ? "active" : ""
}


onClick={()=>setPage(tab)}

>

{tab}

</button>


))}


</nav>

);


}


export default Navigation;
