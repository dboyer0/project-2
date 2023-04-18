import { connect } from "react-redux";

const PollPreview = ({ poll, author }) => {
    
    return (
        <li className="poll-container">
            <h1>Poll created by {author.name}</h1>
            <h3>{poll.id} </h3>
        </li>
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