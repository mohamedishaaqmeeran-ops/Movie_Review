import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        toast.success('Registration Successful');
        navigate('/login');

    }

    return (
        <div className="mb-10">
            <h1 className="text-4xl p-4 ml-4 text-center text-pink-600 font-bold">Register</h1>
            <div className="flex justify-center items-center">
                <div className="w-xs mx-8 border p-4 border-pink-400 bg-white rounded-xl">
                    <form className="flex flex-col gap-7 " onSubmit={handleRegister}>
                        <input
                            type="text"
                            className="border w-full p-1 border-pink-400"
                            placeholder="Name..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border w-full p-1 border-pink-400"
                            placeholder="Email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            className="border w-full p-1 border-pink-400"
                            placeholder="Password..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="border p-2 bg-pink-600 hover:bg-pink-700 text-white cursor-pointer"
                        >Register</button>
                        <p className="text-sm font-semibold text-pink-600 ">
                            Already have an account? &nbsp;
                            <Link
                                to={"/login"}
                                className="hover:text-blue-700"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;