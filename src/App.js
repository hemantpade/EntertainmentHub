import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {MainNav} from "./components/NavigationBar/MainNav";
import Search from './pages/search';
import Movie from "./pages/Movie";
import Container from '@mui/material/Container';
import './App.css';
import Series from "./pages/Series";
import All from "./pages/All";
import Header from "./components/Header/Header";
import  Gener   from "./components/Gener/Gener";

function App() {
  console.log('process.env.backend_url', process.env.REACT_APP_BACKEND_URL)
  return (
      <>
     <BrowserRouter>
     <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route path="/All" element={<All/>} />
            <Route path="/movie" element={<Movie/>} />
            <Route path="/tvSeries" element={<Series/>} />
            <Route exact path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <MainNav/>
    </BrowserRouter>
    {/* <Gener/> */}
      </>
  );
}
export default App; 
