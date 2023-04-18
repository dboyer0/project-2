import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import defaultAvatar from "../assets/defaultAvatar.jpg";

const PollPreview = ({ poll, author }) => {
    
    const avatarImage = author.avatarURL ? author.avatarURL : defaultAvatar;

    return (
        <div className="poll-container">
            <h3>Poll created by {author.name}</h3>
            <img
                src={avatarImage}
                alt={author.name}
                style={{maxWidth: "100px", maxHeight: "100px"}}
            />
             <small>{formatDate(poll.timestamp)}</small>
            <Link to={`/question/${poll.id}`}>View Poll</Link>
        </div>
    );
}
    
const mapStateToProps = ({ polls, users }, { id }) => {
    const poll = polls[id];
  
    return {
      poll: poll,
      author: poll ? users[poll.author] : null,
    };
}

export default connect(mapStateToProps)(PollPreview);