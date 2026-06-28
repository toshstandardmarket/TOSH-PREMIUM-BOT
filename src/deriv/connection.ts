const DERIV_WS =
"wss://ws.derivws.com/websockets/v3?app_id=1089";


let socket: WebSocket | null = null;


export function connectDeriv(){

if(socket) return socket;


socket = new WebSocket(DERIV_WS);


socket.onopen = () => {

console.log(
"Deriv WebSocket Connected"
);

};


socket.onclose = () => {

console.log(
"Deriv WebSocket Closed"
);

socket = null;

};



socket.onerror = (error)=>{

console.log(
"Deriv Connection Error",
error
);

};



return socket;

}



export function getDerivSocket(){

return socket;

}
