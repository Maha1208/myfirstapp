import React from 'react';
import Product from './Product';
import { Route, Switch} from "react-router-dom";

const Route1 = () => {
  return (
    <div>
        <switch>
            <Route path='/' exact>
                <Product/>
            </Route>
        </switch>
    </div>
  )
}

export default Route1