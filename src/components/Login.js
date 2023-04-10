import { Fragment } from "react";

const Login = () =>{
    return (
        <Fragment>
            <img src="" alt="Default Avatar" />

            <form>
                <input type="text" placeholder="Enter Username" />
                <input type="password" placeholder="Enter Password" />
                <button onClick={() => console.log("Form Submitted")}>Login</button>
            </form>
        </Fragment>
    );
}

export default Login;