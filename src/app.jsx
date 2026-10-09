import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { Login } from './login/login';
import { Friends } from './friends/friends';
import { Generator } from './generator/generator';
import { Ideas } from './ideas/ideas';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">Date Generator<sup>&reg;</sup></div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="friends">Friends</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="generator">Generator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="ideas">Saved Ideas</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/friends" element={<Friends />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Tyler Koch</span>
            <a className="text-reset" href="https://github.com/tylego59/startup">Github Source</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}