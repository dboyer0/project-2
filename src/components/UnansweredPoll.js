import { connect } from "react-redux";

const UnansweredPoll = ({ id, author }) => {

    console.log("This Unanswered Poll id: ", id);
    
    return (
        <div className="poll-container">
            <h1>Poll created by {author.name}</h1>
            <h3>Unanswered Poll {id} </h3>
        </div>
    );
}

const mapStateToProps = ({ id }) => {
    return {
        id
    };
};

export default connect(mapStateToProps)(UnansweredPoll);