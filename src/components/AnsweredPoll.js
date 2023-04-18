import { connect } from "react-redux";

const AnsweredPoll = ({ id, author }) => {

    console.log("This Answered Poll id: ", id);
    
    return (
        <div className="poll-container">
            <h1>Poll by {author}</h1>
            <h3>Answered Poll {id} </h3>
        </div>
    );
}

const mapStateToProps = ({ id }) => {
    return {
        id
    };
};

export default connect(mapStateToProps)(AnsweredPoll);