import React from 'react';
import { appName } from '../constants';
import './MyApp.scss';

export default function MyApp() {
    const logo = require('./../../resources/images/my-application.png');
    return (
        <div className="Landing">
            <h1 className='App'>{appName}</h1>
            <img src={logo} alt="Lotcheck" />
        </div>
    );
}
