import PropTypes from "prop-types";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthedUser } from "../actions/authedUser";

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
                <div className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/add">New</Link>
                    <span>{user.id}</span>
                    <span onClick={handleLogout}>Logout</span>
                </div>             
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