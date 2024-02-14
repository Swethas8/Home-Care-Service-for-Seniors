// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
  //   const [count, setCount] = useState(0)
  
  //   return (
    //     <>
    //       <div>
    //         <a href="https://vitejs.dev" target="_blank">
    //           <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://react.dev" target="_blank">
    //           <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //       </div>
    //       <h1>Vite + React</h1>
    //       <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //           count is {count}
    //         </button>
    //         <p>
    //           Edit <code>src/App.jsx</code> and save to test HMR
    //         </p>
    //       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home,  /*Products,*/ AboutPage, ContactPage, /*Cart,*/ Login, Register, BookService, Profile, MyBooking, EditBooking, AdminLogin, AHome, Aabout, AContact, Operation, Postserv, EditServ, DeleteServ, ViewServ, ChangeStat, UHome, UBooking, DeleteBooking } from "./pages"
import { Service } from './components';
import MainHome from './pages/MainHome';
import ViewBooking from './pages/ViewBooking';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
        <Router>
        <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/BookService" element={<BookService />} />
        <Route path="/UBooking" element={<UBooking />} />
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/EditBooking" element={<EditBooking />} />
        <Route path="/DeleteBooking" element={<DeleteBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AHome" element={<AHome/>}/>
        <Route path="/Aabout" element={<Aabout/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/Operation" element={<Operation />} />
        <Route path="/Postserv" element={<Postserv />} />
        <Route path="/EditServ" element={<EditServ />} />
        <Route path="/DeleteServ" element={<DeleteServ />} />
        <Route path="/ViewServ" element={<ViewServ/>} />
        <Route path="/ViewBooking" element={<ViewBooking/>} />
        <Route path="/ChangeStat" element={<ChangeStat/>} />
        <Route path="/AContact" element={<AContact/>}/>
        <Route path="/UHome" element={<UHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;