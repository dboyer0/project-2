import PropTypes from "prop-types";
import {
    Fragment,
    useState
} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

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

    console.log("Users list: ", users);
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