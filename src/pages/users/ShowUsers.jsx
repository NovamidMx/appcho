// import {AddUsers} from "./AddUsers";
import { useState, useEffect } from "react";
import ModalAddUser from "./ModalAddUser";
import DropdownMenu from '../../components/DropdownMenu';

import axios from 'axios';

const baseUrlGetUsers = 'http://localhost:3001/api/users';

const ShowUsers = () => {
    // const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);

    // const handleOnClose = () => setShowModal(false);
    const getUsers = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3001/api/users',
            headers: {}
        };
        const response = await axios(config)
        setUsers(response.data.data)
        console.log(users)
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            {console.log(1 + " " + users)}
            <div className="flex justify-end m-2">
                <ModalAddUser />
                {/* <DropdownMenu/> */}
            </div>
            <div className="flex justify-center">
                <table className="table w-10/12 mx-2">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user) => (
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {/* <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div> */}
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">Mérida, Yucatán</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Abogado</span>
                                    </td>
                                    <td>Administrativo</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
}

export default ShowUsers;

