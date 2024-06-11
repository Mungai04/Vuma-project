import React, { useState }from "react";
const SignupForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signup:', { email,password});
    };
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input
                type="email"
                placeholder="mungaijohn@gmail.com"
                value={email}
                onChange={(e) => 
                    setEmail(e.target.value)
                }
                required />
                <input 
                type="password"
                placeholder="yourpassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
};
export default SignupForm;