import React from 'react';
import { render } from 'react-dom';

import Root from './src/Root';
import '../stylesheets/style.scss'

render((
  <div>
    <Root/>
  </div>), document.getElementById("app"));