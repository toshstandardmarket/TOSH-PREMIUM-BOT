import { connectDeriv } from "../deriv/connection";


export function subscribeTicks(
symbol:string,
callback:(data:any)=>void
){


const ws = connectDeriv();



ws.onopen = ()=>{


ws.send(
JSON.stringify({

ticks:symbol,
subscribe:1

})
);



};



ws.onmessage=(msg)=>{


const data =
JSON.parse(msg.data);



if(data.tick){

callback(
data.tick
);

}


};



return ws;

}
