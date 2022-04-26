import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './Clock.js';
import { Toggle, LoggingButton} from './Toggle.js';
import LoginControl from './Greeting.js';
import { NumberList } from './List.js';

const numbers = [1,2,3,4];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Clock />
    <Toggle />
    <LoggingButton />
    <br/>
    <LoginControl />
    <NumberList numbers={numbers}/>
  </div>
);