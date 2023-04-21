import { connect } from "react-redux";
import {
    useNavigate,
    useLocation,
    useParams
} from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import defaultAvatar from "../assets/defaultAvatar.jpg";

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
        <div>
            {!id || !author ? (
                <h1>404 Page Not Found</h1>
            ) : (
                <div className="poll-container">

                    <div>
                        <h2>Poll by {author.name} </h2>
                        <img
                            src={author.avatarURL ? author.avatarURL : defaultAvatar}
                            alt="poll author avatar"
                        />
                        <h3 className="m-2">Would You Rather?</h3>
                        {answeredPoll ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
                    </div>

                </div>
            )}
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