import { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <h1>404 - Page not found</h1>
            <small>generated by react-router-dom wildcard route mismatch</small>
            <br />
            <Link to="/">Return Home</Link>
        </Fragment>
    );
}

export default NotFound;