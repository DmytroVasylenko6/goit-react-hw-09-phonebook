import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageContainer from '../components/common/PageContainer';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';


const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "home-page" */));
const ContactsPage = lazy(() => import('../pages/ContactsPage' /* webpackChunkName: "contact-page" */));
const RegisterPage = lazy(() => import('../pages/RegisterPage' /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import('../pages/LoginPage' /* webpackChunkName: "login-page" */));


export const paths = {
  MAIN: '/',
  CONTACTS: '/contacts',
  LOGIN: '/login',
  REGISTER: '/register'
};

const Router = () => {
  return (
    <PageContainer>

      <Suspense fallback={<p align="center">Загружаем...</p>}>
        <Switch>
          
          <Route exact path={paths.MAIN}>
              <HomePage/>
          </Route>
          
          <PrivateRoute path={paths.CONTACTS} redirectTo={paths.LOGIN}>
            <ContactsPage/>
          </PrivateRoute>
            
          <PublicRoute path={paths.REGISTER} restricted  redirectTo={paths.CONTACTS}>
            <RegisterPage/>
          </PublicRoute>
              
          <PublicRoute path={paths.LOGIN} restricted  redirectTo={paths.CONTACTS}>
            <LoginPage/>
          </PublicRoute>
                  
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </PageContainer>
  );
};

export default Router;
