import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Bag from './pages/Bag';
import SimilarPages from './pages/SimilarPages';
import Account from './pages/Account';
import HistoricBuys from './pages/HistoricBuys';
import ReportPurchasesPerCustomer from './pages/Admin/Reports/PurchasesPerCustomer';
import ReportMissingProducts from './pages/Admin/Reports/MissingProducts';
import ReportDailyValue from './pages/Admin/Reports/DailyValue';
import Customers from './pages/Admin/Customers';
import Stock from './pages/Admin/Stock';
import NotFound from './pages/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sacola" exact component={Bag}/>
                <PrivateRoute path="/favoritos" exact component={SimilarPages} />
                <Route path="/categorias/:description" exact component={SimilarPages} />
                <Route path="/busca/:term" exact component={SimilarPages} />
                <PrivateRoute path="/conta" exact component={Account}/>
                <PrivateRoute path="/historico" exact component={HistoricBuys}/>
                <Route path="/relatorio-compras-por-cliente" exact component={ReportPurchasesPerCustomer} />
                <Route path="/relatorio-produtos-em-falta" exact component={ReportMissingProducts} />
                <Route path="/relatorio-valor-diario" exact component={ReportDailyValue} />
                <Route path="/clientes" exact component={Customers} />
                <Route path="/estoque" exact component={Stock} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;