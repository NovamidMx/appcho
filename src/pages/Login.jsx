import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.jpg';

import axios from 'axios';

const baseUrlLogin = 'http://localhost:3001/api/auth/login';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangeUsername = (username) => {
        setUsername(username.target.value);
        setError('');
    }

    const handleChangePassword = (password) => {
        setPassword(password.target.value);
        setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', username);
        formData.append('password', password); //encriptar

        try {
            const responseLogin = await login(formData);
            if (responseLogin.status === 200) {
                console.log(1);
                navigate("/home")
            }
        }
        catch (e) {
            setError('Invalid username or password');
            return;
        }
    }

    const login = async (formData) => {
        const config = {
            method: 'post',
            url: baseUrlLogin,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : formData
        };

        const response = await axios(config);
        return response
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input name="username"
                        className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                        type="text"
                        onChange={handleChangeUsername}
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input name="password"
                        className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        type="password"
                        onChange={handleChangePassword}
                    />
                </div>
                {/* <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div> */}
                <button onClick={handleSubmit} className='w-full my-5 py-2 bg-blue-700 shadow-lg shadow-blue-700/50 hover:shadow-blue-700/40 text-white font-semibold rounded-lg'>Entrar</button>
            </form>
        </div>
    </div>
  )
}