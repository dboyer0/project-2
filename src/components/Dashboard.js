import { connect } from "react-redux";
import PollPreview from "./PollPreview";

const Dashboard = ({ unansweredPollIds, answeredPollIds }) => {

    return (
        <div>
            <h1>Dashbboard</h1>

            <h3>Answered Polls</h3>
            <ul>
                {Object.keys(answeredPollIds).map(key => (
                    <PollPreview key={answeredPollIds[key]} id={answeredPollIds[key]} />
                ))}
            </ul>

            <h3>Unanswered Polls</h3>
            <ul>
            {Object.keys(unansweredPollIds).map(key => (
                    <PollPreview key={unansweredPollIds[key]} id={unansweredPollIds[key]} />
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ authedUser, polls, users }) => {
    let unansweredPollIds = null;
    let answeredPollIds = null;
  
    if (authedUser && polls && users) {
      // if all data is abailable then filter based on users unanswered polls then sort by newest to oldest
      unansweredPollIds = Object.keys(polls)
        .filter((id) => !users[authedUser].answers[id])
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
      // if all data is abailable then filter based on users answered polls then sort by newest to oldest
      answeredPollIds = Object.keys(polls)
        .filter((id) => users[authedUser].answers[id])
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
    }

    return {
      unansweredPollIds,
      answeredPollIds,
    };

}

export default connect(mapStateToProps)(Dashboard);