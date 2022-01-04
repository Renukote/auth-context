import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


export const Navbar = () =>  {
    const { isAuth, handleAuthUpdate } = useContext(AuthContext);

    return <div>
        <button onClick={() => handleAuthUpdate() }> { isAuth ? "Log out" : "Login" }</button>
    </div>
}