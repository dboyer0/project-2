import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ authedUser, users }) =>{

    let user = null;
    // is user authorized?
    if(authedUser && users){
        user = users[authedUser];
    }

    return (
        <div className="nav-container">
            {user && (
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/new">New</Link>
                    <span>{user.id}</span>
                    <Link to="/logout">Logout</Link>   
                </div>             
            )}
        </div>        
    );
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    };
}

export default connect(mapStateToProps)(Nav);