import PropTypes from "prop-types";
import {
    Fragment,
    useState
} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import defaultAvatar from "../assets/defaultAvatar.jpg";

const Login = ({ dispatch, users }) => {

    const navigate = useNavigate();
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

        const user = users[username];
        if(user && user.password === password){
            dispatch(setAuthedUser(username));
            navigate("/");
        } //TODO handle error/failed attempt
    };

    const testCredentials = [
        {
            username: "tylermcginnis",
            pasword: "abc321"
        },
        {
            username: "sarahedo",
            pasword: "password123"
        },
        {
            username: "zoshikanlu",
            pasword: "pass246"
        }
    ];

    // const demoClick = (e) => {
    //     e.preventDefault();

    //     // setUsername(testCredentials[e.target.id].username);
    //     console.log("DEMO USERNAME: ", testCredentials[e.target.id].username);
    //     // setPassword(testCredentials[e.target.id].password);
    //     console.log("DEMO PASSWORD: ", testCredentials[e.target.id].password);
    // }

    return (
        <Fragment>
            <img
                src={defaultAvatar}
                alt="author"
                style={{maxWidth: "100px", maxHeight: "100px"}}
            />

            <form>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    autoFocus
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

            <ul>
                {testCredentials.map(testUser => (
                    <li key={testUser.pasword}>Username: {testUser.username}, Password: {testUser.pasword}, <button id={testUser.username} onClick={() => {
                        dispatch(setAuthedUser(testUser.username));
                        navigate("/");
                    }}>Use This Demo Account</button></li>
                ))}
            </ul>
        </Fragment>
    );
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}

const mapStateToProps = ({ users }) => {
    return {
        users
    };
}

export default connect(mapStateToProps)(Login);