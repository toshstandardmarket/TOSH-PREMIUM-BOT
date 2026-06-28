const DERIV_WS =
"wss://ws.derivws.com/websockets/v3?app_id=33FyAVfAb5UdDeFEejgPD";


let socket: WebSocket | null = null;



export function connectDeriv(){


if(socket){

return socket;

}



socket = new WebSocket(
DERIV_WS
);



socket.onopen = ()=>{

console.log(
"Deriv Connected"
);


};



return socket;


}





export function authorize(token:string){


const ws =
connectDeriv();



ws.onopen = ()=>{


ws.send(
JSON.stringify({

authorize:token

})
);



};



return ws;


}




export function requestBalance(){


if(!socket) return;


socket.send(

JSON.stringify({

balance:1

})

);


}
