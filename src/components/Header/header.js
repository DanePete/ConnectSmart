import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const Header = () => {

    let history = useHistory();
  return (
    <div>
        <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Header;