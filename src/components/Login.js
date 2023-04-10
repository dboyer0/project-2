import {
    Fragment,
    useState
} from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        const text = e.target.value;
        const option = e.target.id;
    
        option === "username" ? setUsername(text) : setPassword(text);
    };

    console.log("Username: ", username);
    console.log("Password: ", password);

    return (
        <Fragment>
            <img src="" alt="Default Avatar" />

            <form>
                <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button onClick={(e) => {
                    e.preventDefault();
                    console.log("Form Submitted")
                }}>Login</button>
            </form>
        </Fragment>
    );
}

export default Login;