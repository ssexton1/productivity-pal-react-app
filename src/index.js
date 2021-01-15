import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';

const SAMPLE_TASKS = [
    {id:1, description:'Learn JSX', complete:true},
    {id:2, description:'Learn about React State', complete:false},
    {id:3, description:'Get some sleep', complete:false}
];

ReactDOM.render(<BrowserRouter><App tasks={SAMPLE_TASKS}/></BrowserRouter>, document.getElementById('root'));