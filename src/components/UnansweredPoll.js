import { connect } from "react-redux";

const UnansweredPoll = ({ id }) => {

    console.log("This Unanswered Poll id: ", id);
    
    return (
        <div className="poll-container">
            <h1>Unanswered Poll {id} </h1>
        </div>
    );
}

const mapStateToProps = ({ id }) => {
    return {
        id
    };
};

export default connect(mapStateToProps)(UnansweredPoll);