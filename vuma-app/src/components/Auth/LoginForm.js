import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom";

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLognin = (e) => {
        e.preventDefault();
        console.log('LOgin:', { email,password });
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLognin}>
                <input
                type="email"
                placeholder="mungaijohn@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                require/>
                <input
                type="password"
                placeholder="your password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default LoginForm;