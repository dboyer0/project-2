import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import PollPreview from "./PollPreview";

const Dashboard = ({ unansweredPollIds, answeredPollIds }) => {

    const [ showing, setShowing ] = useState("answered");

    const handleToggle = () => {
        if(showing === "answered"){
            setShowing("unanswered");
        } else if (showing === "unanswered"){
            setShowing("answered");
        }
    }

    return (
        <div>
            <h1>Dashbboard</h1>

            <button onClick={handleToggle}>Show {showing === "answered" ? "unasnwered" : "answered"} Polls</button>

            {showing === "answered" && <h2>Answered Polls</h2>}
            {showing === "answered" && Object.keys(answeredPollIds).map(key => (
                <PollPreview key={answeredPollIds[key]} id={answeredPollIds[key]} />
            ))}

            {showing === "unanswered" && <h2>Unanswered Polls</h2>}
            {showing === "unanswered" && Object.keys(unansweredPollIds).map(key => (
                <PollPreview key={unansweredPollIds[key]} id={unansweredPollIds[key]} />
            ))}
        </div>
    );
}

const mapStateToProps = ({ authedUser, polls, users }) => {
    let unansweredPollIds = null;
    let answeredPollIds = null;
  
    if (authedUser && polls && users) {
      // if all data is available then filter based on users unanswered polls then sort by newest to oldest
      unansweredPollIds = Object.keys(polls)
        .filter((id) => !users[authedUser].answers[id])
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
      // if all data is available then filter based on users answered polls then sort by newest to oldest
      answeredPollIds = Object.keys(polls)
        .filter((id) => users[authedUser].answers[id])
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
    }

    return {
      unansweredPollIds,
      answeredPollIds,
    };

}

Dashboard.propTypes = {
    unansweredPollIds: PropTypes.array.isRequired,
    answeredPollIds: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Dashboard);