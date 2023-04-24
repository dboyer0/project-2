import PropTypes from "prop-types";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthedUser } from "../actions/authedUser";
import defaultAvatar from "../assets/defaultAvatar.jpg";

const Nav = ({ authedUser, users, dispatch }) =>{

    const navigate = useNavigate();

    let user = null;
    // is user authorized?
    if(authedUser && users){
        user = users[authedUser];
    }

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(resetAuthedUser());
        navigate("/");
    }

    return (
        <Fragment>
            {user && (
                <ul>
                    <li>
                        <Link to="/" component="a">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/leaderboard" component="a">Leaderboard</Link>
                    </li>

                    <li>
                        <Link to="/add" component="a">New</Link>
                    </li>

                    <li style={{ float: "right" }}>
                        <span onClick={handleLogout}>Logout</span>
                    </li>

                    <li style={{ float: "right" }}>
                        <div style={{ display: "flex" }}>
                            <img
                                src={users[authedUser].avatarURL ? users[authedUser].avatarURL : defaultAvatar}
                                alt="user avatar"
                                style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "50px" }}
                            />
                            <span>{user.id}</span>
                        </div>
                    </li>

                </ul>             
            )}    
        </Fragment>
    );
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    };
}

Nav.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authedUser: PropTypes.string,
    users: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Nav);