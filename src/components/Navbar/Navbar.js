import React, { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";



function Navbar({isLoggedIn, setIsLoggedIn}) {
    return ( 
        <>
            <h3>THE VAULT - NAVBAR</h3>
            <AuthButton
            isLoggedIn={isLoggedIn}
            setIsLoggedIn = {setIsLoggedIn}
            />
            <br/>
            <div>
                <a href='https://opensea.com'>OpenSea</a> <br/>
                <a href='https://telegram.com'>Telegram</a>
            </div>
           
        </>
     
     );
}

export default Navbar;