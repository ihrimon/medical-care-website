import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Doctors from './Pages/Home/Doctors/Doctors/Doctors';
import Home from './Pages/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Faqs from './Pages/Home/FAQ\'s/Faqs';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service-detail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/faqs">
              <Faqs></Faqs>
            </Route>
            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
