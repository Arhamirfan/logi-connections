import React from "react";
import RoutePaths from "../../Constants/paths";
import { useSelector, useDispatch } from "react-redux";
const NavigationBar = (props) => {
  const wallet = useSelector((data) => data.wallet);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logi Connections
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={RoutePaths.home}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={RoutePaths.about}>
                  About
                </a>
              </li>
            </ul>
            {wallet}
            <button className="btn btn-primary">Connect Wallet</button>
            {/* <span className="navbar-text">Connect Wallet</span> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
