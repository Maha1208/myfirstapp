import React from 'react';
import Product from './Product';
import CottonSaree from './Cottonsaree';
import { Route, Switch} from "react-router-dom";

const Routes = () => {
  return (
    <div>
        <switch>
            <Route path='/' exact>
                <CottonSaree/>
            </Route>
        </switch>
    </div>
  )
}

export default Routes