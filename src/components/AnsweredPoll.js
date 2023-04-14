import { connect } from "react-redux";

const AnsweredPoll = ({ id }) => {

    console.log("This Answered Poll id: ", id);
    
    return (
        <div className="poll-container">
            <h1>Answered Poll {id} </h1>
        </div>
    );
}

const mapStateToProps = ({ id }) => {
    return {
        id
    };
};

export default connect(mapStateToProps)(AnsweredPoll);