import classes from './Layout.module.css';
import React from 'react';
import MainNavigation from './MainNavigation';


function Layout(props) {
    return (<div>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
    </div>
    );   
}


export default Layout;