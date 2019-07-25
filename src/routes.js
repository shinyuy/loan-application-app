import React from "react";
import AddApplicant from "./components/apply/AddApplicant";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Dashboard from "./components/admin/Dashboard";
import Layout from "./HOC/Layout";
import { Route, Switch } from "react-router-dom";
import NotFound from "./utils/NotFound";
import Validated from "./components/admin/validated/Validated";
import Applicant from "./components/admin/applicant/Applicant";
import ValidatedApplicant from "./components/admin/validated/ValidatedApplicant";
import Contact from "./components/contact/Contact";
import Auth from "./HOC/Auth";
import UserDashboard from "./components/user/index";
import Admins from "./components/admin/admins/Admins";
import UserAccount from "./components/admin/users/UserAccount";
import SingleUserAccount from "./components/admin/users/SingleUserAccount";

const Routes = props => {
  return (
    <Layout auth={Auth}>
      <Switch>
        <Route exact path="/" component={Auth(Home, null, false)} />
        <Route exact path="/contact" component={Auth(Contact, null, false)} />
        <Route
          path="/admin/dashboard"
          exact
          component={Auth(Dashboard, true, true)}
        />
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true, false)}
        />
        <Route
          path="/register"
          exact
          component={Auth(Register, false, false)}
        />
        <Route path="/login" exact component={Auth(Login, false, false)} />

        <Route path="/about" exact component={Auth(About, false, false)} />
        <Route
          exact
          path="/apply"
          component={Auth(AddApplicant, true, false)}
        />
         <Route
          path="/admin/userAccounts"
          exact
          component={Auth(UserAccount, true, true)}
        />
        <Route
          path="/admin/userAccounts:_id"
          exact
          component={Auth(SingleUserAccount, true, true)}
        />
        <Route
          exact
          path="/admins"
          component={Auth(Admins, true, true)}
        />
        <Route
          {...props}
          exact
          path="/validated_applicants"
          component={Auth(Validated, true, true)}
        />
        <Route
          {...props}
          exact
          path="/dashboard"
          component={Auth(Dashboard, true, true)}
        />
        <Route
          {...props}
          exact
          path="/applicant/:_id"
          component={Auth(Applicant, true, true)}
        />
        <Route
          {...props}
          exact
          path="/valid_applicant/:_id"
          component={Auth(ValidatedApplicant, true, true)}
        />

        <Route component={Auth(NotFound, null)} />
      </Switch>
    </Layout>
  );
};
export default Routes;
