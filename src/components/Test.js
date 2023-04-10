import { connect } from "react-redux";
import { toggleTest } from "../actions/tests";

const Test = ({ isVisible }) => {
    return (
        <div>
            <h2>Test Toggle</h2>
            <p>{isVisible ? "true" : "false"}</p>

            <button onClick={() => {
                console.log("Toggled Visibility [BEFORE]: ", isVisible)
                this.props.toggleVisibility()
                console.log("Toggled Visibility [AFTER]: ", isVisible)
            }}>Toggle</button>
        </div>
    );
}

const mapStateToProps = isVisible => ({
    isVisible
});

const mapDispatchToProps = dispatch => ({
    toggleVisibility: () => dispatch(toggleTest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test); 