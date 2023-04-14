import { connect } from "react-redux";

const Poll = ({ poll, author }) => {

    console.log("This Poll: ", poll);
    
    return (
        <div className="poll-container">
            <h1>Poll create by {author}</h1>
        </div>
    );
}

const mapStateToProps = ({ polls, author }, { id }) => {
    const poll = polls[id];

    return {
        poll: poll,
        author: poll ? users[poll.author] : null
    };
}

export default connect(mapStateToProps)(Poll);