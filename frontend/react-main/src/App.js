import React from 'react';

const App = () => {
	return (
		<div>
		</div>
	)
};

export {App } ;











// import React, { useState } from 'react';
// //import ReactDOM from 'react-dom';
// import { BrowseRouter as Router , Route, Switch, Link, browserHistory, IndexRoute } from 'react-router-dom';
// import blog from "./blog";
// import wheather from "./wheather";
// import climate from "./climate";
// import donation from "./donation";
// import { func } from 'prop-types';


// function App(){
//   return(
//     <Router>
//       <switch>
//         <Route exact path = "/blog" component={blog} />
//         <Route exact path = "/wheather" component={wheather} />
//         <Route exact path = "/climate" component={climate} />
//         <Route exact path = "/donation" component={donation} />
//       </switch>
//     </Router>
//   );
// }

// export default App;


// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul>
//             {this.props.children}
//          </div>
//       )
//    }
// }
// export default App;

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
// export default Home;

// class About extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>About...</h1>
//          </div>
//       )
//    }
// }
// export default About;

// class Contact extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Contact...</h1>
//          </div>
//       )
//    }
// }
// export default Contact;

//  ReactDOM.render((
//   <Router history = {browserHistory}>
//      <Route path = "/" component = {App}>
//         <IndexRoute component = {Home} />
//         <Route path = "home" component = {Home} />
//         <Route path = "about" component = {About} />
//         <Route path = "contact" component = {Contact} />
//      </Route>
//   </Router>
// ), document.getElementById('app'))