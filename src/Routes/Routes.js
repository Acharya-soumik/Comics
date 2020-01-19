import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Comics from "../Components/Comics";
import DragonBallZ from "../Components/DragonBallZ";

const Home = () => <h2>Home Page</h2>;

function Routes() {
  return (
    <>
      <nav className="bg-warning pb-3">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="text-dark nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/comics" className="text-dark nav-link">
              Show Comics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dbz" className="text-dark nav-link">
              Dragon Ball Z
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/comics" component={() => <Comics />} />
        <Route path="/dbz" component={() => <DragonBallZ />} />
      </Switch>
    </>
  );
}

export default Routes;
