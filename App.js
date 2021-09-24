import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from './views/Home';
import Login from './views/Login';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </NativeRouter>
  );
}