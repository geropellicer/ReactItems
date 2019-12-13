import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="content home">
            <header>
                <h1>Home</h1>
            </header>
            <div className="body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mi sagittis, tempus ipsum a, dignissim ante. Nam quis lacus eu ligula maximus egestas a vel mauris. Donec varius, sapien a pharetra pellentesque, erat est dapibus nulla, sit amet cursus mi urna mattis tortor. Curabitur aliquet lobortis luctus. Nunc a ligula sit amet augue sollicitudin pretium non et ipsum. Nunc et consequat enim. Duis imperdiet dui id turpis ultrices, at vulputate ipsum efficitur. Ut lorem leo, laoreet nec erat sit amet, congue ullamcorper ex. In bibendum egestas auctor. Integer varius vulputate dolor a sodales. Vestibulum dignissim nisl faucibus, tempus ante lobortis, elementum nibh. Etiam laoreet, velit nec vehicula laoreet, ipsum urna aliquam urna, nec varius velit justo posuere eros.</p>
                <p>Curabitur ut augue efficitur, malesuada purus a, venenatis nisl. Quisque tristique ex turpis, quis condimentum nisl finibus ut. Suspendisse condimentum est ac magna consectetur, a dapibus sapien fringilla. Pellentesque condimentum odio a sem lacinia, id bibendum enim porttitor. Sed vel tellus semper, semper nibh cursus, accumsan magna. Donec tellus mauris, lobortis tristique risus id, ullamcorper commodo quam. Nulla ac massa sed erat scelerisque dignissim vel id quam. Fusce viverra, urna sed ultricies hendrerit, nisi metus molestie purus, et malesuada nulla nisi vitae eros. Aliquam malesuada et nibh a luctus. Aliquam id ex sollicitudin, pulvinar nisl id, interdum quam. Curabitur iaculis efficitur neque, ut sollicitudin ligula faucibus vitae. Praesent rutrum sed lacus id blandit. Mauris dignissim, felis a ultrices lobortis, diam erat pretium nunc, nec pharetra dui velit quis enim.</p>
                <div className="grid-menu">
                    <Link to="/about">
                        <div>About</div>
                    </Link>
                    <Link to="/shop">
                        <div>Shop</div>
                    </Link>
                    <Link to='/versus'>
                        <div>Versus</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;