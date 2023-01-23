
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic} from "@fortawesome/free-solid-svg-icons"

const Nav = ({toggle,setToggle}) =>{

   const libraryToggleHandler=()=> {
       setToggle(!toggle)
    }
    return (
        <div className="nav">
           <h3>Zema</h3>
           <button onClick={libraryToggleHandler}>
            Library <FontAwesomeIcon className="libraryIcon" icon={faMusic} />
           </button>
           
           
        </div>
    )
}


export default Nav;