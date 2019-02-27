import React from 'react';
import { Route } from 'react-router-dom';

import routes from './config';

export default class extends React.Component {
    render() {
        return (
            <>
                {
                    routes.map((item, index) => {
                        if (!item.children) {
                            return(
                                <Route 
                                    exact 
                                    path={ item.path }
                                    component={ item.component } 
                                    key={ index }
                                />
                            )
                        }
                        return item.children.map((__item,__index) => {
                            return(
                                <Route
                                    exact 
                                    path={ __item.path }
                                    component={ __item.component } 
                                    key={ `${ __index }-0` }
                                />
                            );
                        })
                    })
                }      
            </>
        );
    }
}
