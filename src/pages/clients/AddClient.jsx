import { useState } from 'react'
import axios from 'axios';

const baseUrlLogin = 'http://localhost:3001/api/clients';

const AddClients = () => {
    const initialForm = {
        name: '',
        direccion: '',
        age: '',
        email: '',
        telefono: '',
        password: '',
        // rol: '',
    }
    const [inputValue, setInputValue] = useState('');
    const [form, setForm] = useState(initialForm)

    const createClient = (Client) => {
        return;
    }

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        })
        console.log(form)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(event)

        const responseRegister = await registerClient(form)
        console.log(responseRegister);

    }

    const handleReset = (event) => {
        setForm(initialForm);
    }

    const registerClient = async (form) => {
        const config = {
            method: 'post',
            url: baseUrlLogin,
            headers: {
                'Content-Type': 'application/json'
            },
            data: form
        };

        const response = await axios(config);
        return response
    }

    return (
        <>
            <div className="my-4">
                <h2>Registro del cliente</h2>
            </div>
            <form onSubmit={(event) => onSubmit(event)}>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Dirección
                    </label>
                    <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Correo
                    </label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Telefono
                    </label>
                    <input
                        type="text"
                        name="tel"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Contraseña
                    </label>
                    <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                    />
                </div> */}
                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mr-2'>
                        Recomandado por
                    </label>
                    <select
                        className="select select-bordered max-w-xs w-2/5"
                        name="rol"
                    // onChange={handleChange}
                    >
                        <option disabled selected>Abogados</option>
                        <option>abogado 1</option>
                        <option>abogado 2</option>
                    </select>
                </div>
                <div className='mb-4 flex flex-col w-1/4'>
                    <label htmlFor="" className='mr-2'>
                        Edad
                    </label>
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4 flex flex-col'>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Agregar
                    </button>
                </div>

            </form>
        </>

    )
}

export default AddClients;