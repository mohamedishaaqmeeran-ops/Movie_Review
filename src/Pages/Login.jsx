import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Login successful');
        navigate('/dashboard');

    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4 text-center text-pink-600 font-bold">Login</h1>
            <div className="flex justify-center items-center">
                <div className="w-xs mx-8 border p-4 border-pink-400 bg-white rounded-xl">
                    <form className="flex flex-col gap-7 " onSubmit={handleLogin}>
                        <input
                            type="text"
                            className="border border-pink-400 w-full p-1"
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
                        >Login</button>
                        <p className="text-sm font-semibold text-pink-600 ">
                            Don't have an account? &nbsp;
                            <Link
                                to={"/register"}
                                className="hover:text-blue-700"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;