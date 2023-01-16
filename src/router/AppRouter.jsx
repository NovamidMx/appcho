import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import ShowUsers from "../pages/users/ShowUsers";
import ShowClients from "../pages/clients/ShowClients";
import { CalendarPage } from '../calendar';


export const AppRouter = () => {

    const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';


    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? <Route path="/*" element={<Login />} />
                    : <Route path="/*" element={<Home />} />
            }

            {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
            <Route path="/home" element={<Home />}>
                <Route path="users" element={<ShowUsers />} />
                <Route path="clients" element={<ShowClients />} />
                <Route path="calendar" element={<CalendarPage />} />
                {/* <Route path="clients" element={<ShowClients />} /> */}
            </Route>
            {/* <Route path="/" element={<Login />} /> */}

        </Routes>
    )
}