import TopCollections from "../TopCollections/TopCollections";
import HeaderInfo from "./HeaderInfo"
import './Header.css'

function Header() {
    return ( 
        <>
            <div className="main-container">
                <div>
                    <HeaderInfo />
                    <button>Roll</button> 
                    <button>Deposit</button>
                </div>
                <TopCollections />
            </div>
                
        </>
        
     );
}

export default Header;