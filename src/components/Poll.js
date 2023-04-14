import { connect } from "react-redux";

const Poll = ({ id }) => {

    console.log("This Poll id: ", id);
    
    return (
        <div className="poll-container">
            <h1>Poll {id} </h1>
        </div>
    );
}

const mapStateToProps = ({ id }) => {

};

export default connect(mapStateToProps)(Poll);