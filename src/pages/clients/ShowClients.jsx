// import {AddClients} from "./AddClients";
import { useState, useEffect } from "react";
import ModalAddClient from "./ModalAddClient";
import axios from 'axios';

const baseUrlGetClients = 'http://localhost:3001/api/Clients';

const ShowClients = () => {
    // const [showModal, setShowModal] = useState(false);
    const [Clients, setClients] = useState([]);

    // const handleOnClose = () => setShowModal(false);
    const getClients = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3001/api/Clients',
            headers: {}
        };
        const response = await axios(config)
        setClients(response.data.data)
        console.log(Clients)
    }

    useEffect(() => {
        getClients();
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            {console.log(1 + " " + Clients)}
            <div className="flex justify-end m-2">
                <ModalAddClient />
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
                            <th>Dirección</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            Clients.map((Client) => (
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
                                                <div className="font-bold">{Client.name}</div>
                                                <div className="text-sm opacity-50">Mérida, Yucatán</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {Client.email}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Abogado</span>
                                    </td>
                                    <td>{Client.address}</td>
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

export default ShowClients;

