import { connect } from "react-redux";
import {
    useNavigate,
    useLocation,
    useParams
} from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

const PollPage = ({ id, answeredPoll, author }) => {
    
    return (
        <div className="poll-container">
            <div>
                {answeredPoll ? <AnsweredPoll author={author} id={id} /> : <UnansweredPoll author={author} id={id} />}
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser, polls, users }, props) => {
    const { id } = props.router.params;
    const poll = polls[id];
  
    let answeredPoll = null;
    if (authedUser && users) {
      answeredPoll = users[authedUser].answers[id] ? true : false;
    }
  
    return {
      id,
      answeredPoll,
      author: poll ? users[poll.author] : null,
    };
};

export default withRouter(connect(mapStateToProps)(PollPage));