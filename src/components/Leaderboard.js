import PropTypes from "prop-types";
import { connect } from "react-redux";

const Leaderboard = ({ users }) => {

    let usersInfo = Object.values(users);
    usersInfo.map(
      (user) =>
        (user.score = user.questions.length + Object.keys(user.answers).length)
    );
    const sortedUsers = usersInfo.sort((a, b) => b.score - a.score);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedUsers.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{Object.keys(user.answers).length}</td>
                                <td>{user.questions.length}</td>
                                <td>{user.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({ users }) => {
    return {
      users,
    };
}

Leaderboard.propTypes = {
    users: PropTypes.object.isRequired,
}
  
export default connect(mapStateToProps)(Leaderboard);