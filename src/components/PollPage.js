import { connect } from "react-redux";
import {
    useNavigate,
    useLocation,
    useParams
} from "react-router-dom";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

const PollPage = () => {

    console.log("This Poll: ", poll);
    
    return (
        <div className="poll-container">
            <h1>Poll create by {author}</h1>
        </div>
    );
}

const mapStateToProps = () => {

}

export default withRouter(connect(mapStateToProps)(PollPage));