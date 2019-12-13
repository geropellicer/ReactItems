import React from "react";

const Versus = () => {
  return (
    <div className="content home">
      <header>
        <h1>Versus</h1>
      </header>

      <div className="body versus">
        <div className="compare-container">
          <div className="compare">
            <h1>Static</h1>
            <h2>Router import in App.js</h2>
            <pre>{`
    import { BrowserRouter as Router, 
    Switch, 
    Route } from "react-router-dom";
                        `}</pre>

            <h2>Router configuration in App.js</h2>
            <pre>{`
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/versus" exact component={Versus} />
      </Switch>
    </Router>
                      `}</pre>

            <h2>Router link to</h2>
            <pre>{`
<Link to="/shop">
    <h1>Click here for static link to shop</h1>
</Link>
                        `}</pre>
          </div>
          <div className="compare">
            <h1>Dinamic</h1>
            <h2>Router import in App.js</h2>
            <pre>{`
    import { BrowserRouter as Router, 
    Switch, 
    Route } from "react-router-dom";
                            `}</pre>

            <h2>Router configuration in App.js</h2>
            <pre>{`
    <Router>
      <Switch>
        <Route path="/:variable1" exact component={Home} />
        <Route path="/shop/:id" exact component={Shop} />
        <Route path="/about/:something/:buyState" exact component={About} />
        <Route path="/versus/:item" exact component={Versus} />
      </Switch>
    </Router>
                        `}</pre>

            <h2>Router link to</h2>
            <pre>{`
    const toRoute =  \`/shop/$\{slug}-$\{id}\`;
    <Link to={toRoute}>
        <h1>Click here for dinamic link</h1>
    </Link>
            `}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versus;
