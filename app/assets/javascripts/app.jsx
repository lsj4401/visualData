import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.jsx';

import '../stylesheets/style.scss'

render((
    <div>
        <h1>Hello Test</h1>
        <Greeter name="Ninja" />
    </div>), document.getElementById("app"));