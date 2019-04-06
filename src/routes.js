import React from 'react';
import AddApplicant from './components/apply/AddApplicant';
import SignIn from './components/signin/index';
import Home from './components/home/Home';
import About from './components/about/About';
import Dashboard from './components/admin/Dashboard';
import Layout from './HOC/Layout';
import { Switch } from 'react-router-dom';
import NotFound from './utils/NotFound';
import PrivateRoutes from './components/auth/PrivateRoutes';
import PublicRoutes from './components/auth/PublicRoutes';
import ValidatedApplicants from './components/admin/validated/ValidatedApplicants';
import Applicant from './components/admin/applicant/Applicant';

const Routes = (props) => {
   
    return (
        <div className='APP'>
            <Layout>
                <Switch>
                    <PublicRoutes {...props} restricted={false} exact path='/' component={Home} />
                    <PublicRoutes {...props} restricted={false} exact path='/about' component={About} />
                    <PublicRoutes {...props} restricted={false} exact path='/apply' component={AddApplicant} />
                    <PublicRoutes {...props} restricted={true} exact path='/sign_in' component={SignIn} />
                    <PrivateRoutes {...props} restricted={true} exact path='/validated_applicants' component={ValidatedApplicants} />
                    <PrivateRoutes {...props} restricted={true} exact path='/dashboard' component={Dashboard} />
                    <PrivateRoutes {...props} restricted={true} exact path='/applicant/:_id' component={Applicant} />
                    <PublicRoutes  {...props} restricted={false} component={NotFound} />
                </Switch>
            </Layout>
        </div>
    )
}
export default Routes;
