// /* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
// import { useParams } from 'react-router';
// import './store';
// import Counter from './components/counter.jsx';
// import Controls from './components/controls.jsx';
import App from './App.jsx';



// const App = (props) => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Nav />
//             <Routes>
//                 <Route path="/" element={<Welcome/>} />
//                 <Route path="/about" element={<About/>} />
//                 <Route path="/test/:id" element={<Test/>} />
//                 <Route path="*" element={<FallBack />} />

// 			</Routes>
//       </div>
//     </BrowserRouter>
//   );
// };


const root = createRoot(document.getElementById('main'));
root.render(<App />);
