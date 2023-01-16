// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ShowUsers from "./pages/users/ShowUsers";
// import ShowClients from "./pages/clients/ShowClients";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/home" element={<Home />}>
//           <Route path="users" element={<ShowUsers />} />
//           {/* <Route path="clients" element={<ShowClients />} /> */}
//         </Route>
//         <Route path="/" element={<Login />}>
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppRouter } from './router';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider >

  );
};

export default App;
