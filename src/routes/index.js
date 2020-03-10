import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import Signup from './Signup/Signup'
import Login from "./Login/Login";
import Credits from "./Credits/Credits"
import Edit from "./Edit/Edit"

class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            currentRoute: "viewprofile",
            routes: null
        };
    }
/*
    componentDidMount() {
        // Determine routes based on whether the user is logged in or not
        let isLoggedIn = this.props.store.get("isLoggedIn");
        this.setState({
            isLoggedIn: isLoggedIn,
            routes: (isLoggedIn ? loggedInRoutes(this.props) : nonLoggedInRoutes())
        });

        if (isLoggedIn) {
            let nextRoute = '/main',
                requestedRoute = this.props.history.location.pathname;
            // Go to the requested path iff the path is none of the following conditions
            if (requestedRoute !== '/' && requestedRoute !== '/signup' && requestedRoute !== '/login') {
                nextRoute = requestedRoute;
            }

            // Go to the next route
            this.props.history.push(nextRoute + (this.props.history.location.search ? this.props.history.location.search : ""));
        } else if (this.props.history.location.pathname === "/signup") {
            this.props.history.push('/signup');
        } else if (this.props.history.location.pathname === "/login") {
            this.props.history.push('/login');
        } else {
            this.props.history.push('/credits');
        }
    }
*/
    render() {
        return tempRoutes();
    }

}

// const loggedInRoutes = (props) => {
//     return (
//       <Switch>
//         <Route path="/main">
//           <Main store={props.store} />
//         </Route>
//         <Route path="/edit">
//             <Edit store={props.store} />
//         </Route>
//         <Route path="*">
//             INVALID ROUTE
//         </Route>
//         <Route path="/credits" component={Credits} />
//       </Switch>
//     );
// }

// const nonLoggedInRoutes = () => {
//     return (
//       <Switch>
//         <Route path="/signup" component={Signup} />
//         <Route path="/login" component={Login} />
//         <Route path="/credits" component={Credits} />
//       </Switch>
//     );
// }

const tempRoutes = () => {
    return (
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/credits" component={Credits} />
          <Route path="/edit" component={Edit} />
          <Route path="/main" component={Main} />
          <Route path="/" component={Main} />
        </Switch>
      );
}

export default Root;
