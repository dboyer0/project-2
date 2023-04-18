import { connect } from "react-redux";

const AnsweredPoll = ({ authedUser, poll }) => {

    const optionOneVotes = poll.optionOne.votes;
    const optionTwoVotes = poll.optionTwo.votes;
  
    const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  
    const optionOneVotePercentage = Math.round(
      (optionOneVotes.length / totalVotes) * 100
    );
    const optionTwoVotePercentage = Math.round(
      (optionTwoVotes.length / totalVotes) * 100
    );
  
    const userSelectedOptionOne = optionOneVotes.includes(authedUser);
    const userSelectedOptionTwo = optionTwoVotes.includes(authedUser);
    
    return (
        <div>
            <h4>{poll.optionOne.text}</h4>
            <p>{`${userSelectedOptionOne ? "You selected this option. " : ""} Selected by ${optionOneVotes.length} out of ${totalVotes} employees`}</p>
            <strong>{optionOneVotePercentage}%</strong>

            <h4>{poll.optionTwo.text}</h4>
            <p>{`${userSelectedOptionTwo ? "You selected this option. " : ""} Selected by ${optionTwoVotes.length} out of ${totalVotes} employees`}</p>
            <strong>{optionTwoVotePercentage}%</strong>     
        </div>
    );
}

// authedUser and polls from redux state, id from component props
const mapStateToProps = ({ authedUser, polls }, { id }) => {
    const poll = polls[id];
  
    return {
      authedUser,
      poll,
    };
  }

export default connect(mapStateToProps)(AnsweredPoll);