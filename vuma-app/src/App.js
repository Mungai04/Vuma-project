// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }h

// export default App;
// import React from "react";
// import { BrowserRouter as Router,Route ,Switch } from "react-router-dom";
// import Auth from './src/components/Auth';
// import TicketDashboard from './components/Tickets/TicketDashboard';
// import FAQ from '.components/FAQ';
// import './App.css';
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact Component={Auth} />
//         <Route path="/tickets" Component={TicketDashboard} />
//         <Route path="/faq" Component={FAQ} />
//       </Switch>
//     </Router>
//   );
// };
// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginForm from './components/Auth/LoginForm';
// import SignupForm from './components/Auth/SignupForm';
// import TicketDashboard from './components/Tickets/TicketDashboard';
// import TicketForm from './components/Tickets/TicketForm';
// import FAQ from './components/FAQ/FAQ';
// import NavBar from './components/common/NavBar';

// const App = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Switch>
//         <Route path="/" exact component={LoginForm} />
//         <Route path="/signup" component={SignupForm} />
//         <Route path="/tickets" component={TicketDashboard} />
//         <Route path="/submit-ticket" component={TicketForm} />
//         <Route path="/faq" component={FAQ} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import TicketDashboard from './components/Tickets/TicketDashboard';
import TicketForm from './components/Tickets/TicketForm';
import FAQ from './components/FAQ/FAQ';
import NavBar from './components/common/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/tickets" element={<TicketDashboard />} />
        <Route path="/submit-ticket" element={<TicketForm />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;