import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import {Link} from 'react-router-dom';
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link> 
    </div>
    // <Link to=""> for client side routing
);

export default NotFoundPage;