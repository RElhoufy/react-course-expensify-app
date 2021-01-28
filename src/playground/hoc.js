//higher order component --> a component (HOC) that renders another component, uniquely implemented
//goal is to reuse code
//render hijacking
//prop manipulation
//abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (   //regular component
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {    //HOC component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated === false ? <p>please log in</p> : <WrappedComponent {...props} />}   
        </div>
    );
};




const AdminInfo = withAdminWarning(Info);   // The HOC pattern
const AuthInfo =  requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'));