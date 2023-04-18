import { connect } from "react-redux";

const UnansweredPoll = ({ id, dispatch, poll }) => {

    console.log("This Unanswered Poll: ", poll);
    
    return (
        <div>
            <h3>{poll.optionOne.text}</h3>

            <button id="optionOne" onClick={() => {}}>
                Select Option 1
            </button>

            <h3>{poll.optionTwo.text}</h3>

            <button id="optionTwo" onClick={() => {}}>
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

export default connect(mapStateToProps)(UnansweredPoll);