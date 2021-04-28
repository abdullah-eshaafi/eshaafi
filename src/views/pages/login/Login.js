import React from "react";
// import logo from '../../../assets/svgs/logo2.svg'
const Login = () => {
  return (
    <>
        <div className="login-card">
            <div className={"header"}>
                {/*<img src={logo} alt={logo}  />*/}
                <h1>Login</h1>
            </div>
            <form autoComplete="off">
                <input type="text" name="user" placeholder="Username"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="submit" name="login" className="login login-submit" value="login"/>
            </form>
        </div>
    </>
  );
};


export default Login;
