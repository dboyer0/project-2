import { connect } from "react-redux";
import { toggleTest } from "../actions/tests";

const Test = () => {
    return (
        <div>
            <h2>Test Toggle</h2>
            <button disabled="false" onClick={() => {
                this.props.toggleVisibility()
            }}>Toggle</button>
        </div>
    );
}

const mapStateToProps = state => ({
    disabled: getDisabled(state)
});

const mapDispatchToProps = dispatch => ({
    toggleVisibility: () => dispatch(toggleTest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);

// EXAMPLE
// import { connect } from 'react-redux';
// import { toggleVisibility } from '../actions';

// const mapStateToProps = state => ({
//   disabled: getDisabled(state),
// });

// const mapDispatchToProps = {
//   toggleVisibility,
// };

// const MyComponent = ({ disabled, toggleVisibility }) => (
//   <button disabled={disabled} onClick={toggleVisibility}>Toggle</button>
// );

// export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
  