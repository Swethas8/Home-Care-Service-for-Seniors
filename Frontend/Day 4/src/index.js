import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home, Product, /*Products,*/ AboutPage, ContactPage, /*Cart,*/ Login, Register, BookService, Profile, MyBooking, EditBooking, AdminLogin, AdminHome, AChangeStatus, AViewBooking, DeleteService, EditService, PostService, ViewService, AHome, Aabout, AContact, Operation, Postserv, EditServ, DeleteServ, ViewServ, ChangeStat } from "./pages"
import { Service } from './components';
import MainHome from './pages/MainHome';
import ViewBooking from './pages/ViewBooking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/BookService" element={<BookService />} />
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/EditBooking" element={<EditBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AHome" element={<AHome/>}/>
        <Route path="/Aabout" element={<Aabout/>}/>
        <Route path="/AContact" element={<AContact/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/Operation" element={<Operation />} />
        <Route path="/Postserv" element={<Postserv />} />
        <Route path="/EditServ" element={<EditServ />} />
        <Route path="/DeleteServ" element={<DeleteServ />} />
        <Route path="/ViewServ" element={<ViewServ/>} />
        <Route path="/ViewBooking" element={<ViewBooking/>} />
        <Route path="/ChangeStat" element={<ChangeStat/>} />
      </Routes>
  
  </BrowserRouter>
);