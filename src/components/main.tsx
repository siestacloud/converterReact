import React from 'react';
import Container from '@mui/material/Container';
import AllPage from '../pages/allPage';
import ConvPage from '../pages/convPage';
import { Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <Container className="main" maxWidth="lg">
      <Routes>
        <Route path='/' element={<AllPage />} />
        <Route path='/conv' element={<ConvPage />} />
      </Routes>


    </Container>

  );
}

export default Main;
