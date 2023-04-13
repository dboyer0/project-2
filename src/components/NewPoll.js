import { useState } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch }) =>{
    const navigate = useNavigate();

    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();

    const handleChange = (e) => {
        const text = e.target.value;
        const option = e.target.id;

        option === "option1" ? setOption1(text) : setOption2(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddPoll(option1, option2));
        navigate("/");
    }

    return (
        <div>
            <h1>Would you rather?</h1>

            <input
                id="option1"
                type="text"
                placeholder="Enter Option 1"
                onChange={handleChange}
            />

            <input
                id="option2"
                type="text"
                placeholder="Enter Option 2"
                onChange={handleChange}
            />

            <button
                onClick={handleSubmit}
                disabled={option1 === "" || option2 === ""}
            >
                Add Poll
            </button>
        </div>
    );
}



export default connect()(NewPoll);