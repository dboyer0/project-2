import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/polls";

const UnansweredPoll = ({ id, dispatch, poll }) => {

    const handleClick = (e) => {
        e.preventDefault();
    
        dispatch(handleAddAnswer(id, e.target.id));
    };
    
    return (
        <div>
            <h3>{poll.optionOne.text}</h3>

            <button id="optionOne" onClick={handleClick}>
                Select Option 1
            </button>

            <h3>{poll.optionTwo.text}</h3>

            <button id="optionTwo" onClick={handleClick}>
                Select Option 2
            </button>
        </div>
    );
}

const mapStateToProps = ({ polls }, { id }) => {
    const poll = polls[id];
  
    return {
      poll,
    };
}

UnansweredPoll.propTypes = {
    id: PropTypes.string.isRequired,
    poll: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(UnansweredPoll);