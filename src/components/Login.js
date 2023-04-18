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
        } else {
            setUsername("");
            setPassword("");
            dispatch(setAuthedUser(null));
            alert("Failed to login.  Verify the credentials you entered.");
        }
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