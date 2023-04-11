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

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Creds: ", username, password);
    };

    console.log("Username: ", username);
    console.log("Password: ", password);

    return (
        <Fragment>
            <img src="" alt="Default Avatar" />

            <form>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={handleChange}
                />

                <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button
                    onClick={handleClick}
                    disabled={username === "" || password === ""}
                >
                    Login
                </button>
            </form>
        </Fragment>
    );
}

export default Login;