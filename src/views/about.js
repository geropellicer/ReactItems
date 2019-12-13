import React from "react";

const About = () => {
  return (
    <div className="content home">
      <header>
        <h1>About</h1>
      </header>
      <div className="body about">
        <p>
          This is a small and ugly example just to test and practice some react
          features. In this case, the main features we are trying to use are:
        </p>
        <ol>
          <li>
            React Router (Static paths):
            <p>
              We create different components and select some of those components
              as "views" and store them in the corresponding folder to
              differentiate them from "normal" components, which are not gonna
              be displayed by themselves, but rather will be embbeded in views.
            </p>
            <p>
              After that, in the App component we define a router with different
              possible paths and assign a view component for each path. When the
              user visits the path, the corresponding view component is rendered
              and not the others.
            </p>
            <p>
              This uses BrowserRouter, Path, and Switch features from the
              React-router-dom package.
            </p>
          </li>

          <li>
            React Router links (Static paths):
            <p>
              To allow the user to visit the routes described above, we cand
              easyly set links with the Link component from the router.
            </p>
          </li>

          <li>
            React Router (Dinamic paths):
            <p>
              Similar to static routes, but, as it names suggests, we dont
              predefine a static path, but rather a variable to be fullfilled
              later in the form, for example of "/shop/:variable".
            </p>
            <p>
              This is specially useful when you dont know all the possible
              paths. For example, in this case we are using an API to retrieve
              games from a catalllog. Instead of specifying each path, we
              generate a dinamic path for each game on the fly when the user
              clicks the game.
            </p>
          </li>

          <li>
            React Router Get Dinamic Param Variable:
            <p>
              Once you visit a dinamic route, you need a way to know wich url
              you are on in order to perform actions based on what you are
              seeing. In this case, we fetched the data from the router using
              'props.match.params.variable'. We then hit the API with the ID
              obtained and used the fetched data to display the game view.{" "}
            </p>
          </li>
        </ol>
        <p>
          To try it out: navigate from the menu in the top right to explore static links. Then in the shop you can see the result obtained from an API. Each item will direct you to a dinamically generated path and will show you the game info in greater detail.
        </p>
      </div>
    </div>
  );
};

export default About;
