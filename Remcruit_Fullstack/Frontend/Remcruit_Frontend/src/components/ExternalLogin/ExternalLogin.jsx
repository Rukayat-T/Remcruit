import React, {useEffect, useState} from 'react'
import jwt_decode from "jwt-decode"
import { redirect } from "react-router-dom";

function ExternalLogin() {
    const [user, setUser] = useState({});

    function handleCallbackResponse (response){
        console.log("Encoded JWT ID token " + response.credential); 
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
    }
    useEffect( ()=> {
        /* global google */
        google.accounts.id.initialize({
            client_id: "410930062538-b9f0vlr7a7dqlrrtirnl78i8glk46jep.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "dark", size: "large", height:'67px'}
        );
    }, []);

  return (
    <div>
      <div id="signInDiv"></div>
      {
        user && 
        <div>
      <img src={user.picture} alt="" />
      <h3>{user.name}</h3>
      </div>
      }
    </div>
  )
}
 
export default ExternalLogin
