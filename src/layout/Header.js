import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({title}) => {
  return (

    <nav className="navbar-nav">

    <hr style={{
      backgroundColor: "rgb(255, 231, 211)",
      width: "60%"
    }}/>


        <a href="/" className="title">{title}</a>

     <hr style={{
      backgroundColor: "rgb(255, 231, 211)",
      width: "30%"
    }}/>
    
        <ul className="navigation">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to="/add" className="nav-link">Add Character</Link>
          </li>
          <li className="nav-item active">
            <Link to="/github" className="nav-link">Project Files</Link>
          </li>

        </ul>
      </nav>



    //   <div>
    //       <h1 style={{
    //     fontFamily: "Gothic",
    //     textAlign: "center",
    //     fontWeight: "bold",
    //     fontSize: "3.2rem",
    //     // color: "hsl(43, 77%, 47%)"
    //     color: "rgb(255, 231, 211)"
    //   }}>{title}</h1>

    // <ul>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/add">Add Character</Link>
    //   </li>

    //   <li>
    //     <Link to="/github">Project Files</Link>
    //   </li>

    // </ul>

  //    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
Header.defaultProps = {
  title: "A Song of Ice and Fire's characters"
}
export default Header;