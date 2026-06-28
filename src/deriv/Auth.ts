const APP_ID = "1089";


export function loginWithDeriv(){

const redirect =
window.location.origin;


const url =
`https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=en&redirect_uri=${redirect}`;


window.location.href = url;

}



export function checkLogin(){

const params =
new URLSearchParams(
window.location.search
);


const token =
params.get("token1");


const account =
params.get("acct1");


if(token && account){


localStorage.setItem(
"deriv_token",
token
);


localStorage.setItem(
"deriv_account",
account
);



window.history.replaceState(
{},
document.title,
window.location.pathname
);


return true;

}


return false;

}
