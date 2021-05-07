import React, {useState} from "react";
import axios from "axios";
const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const getEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const getPassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const login = (e) =>{
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        axios
            .post("https://pt6w50zq10.execute-api.us-east-1.amazonaws.com/Stage/admin-login", data)
            .then((res) =>{
                console.log(res);
                console.log(res.data.message)
            })
            .catch((err) => console.log(err));

    }



  return (
    <>
        <section className="content">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* left column */}
                    <div className="col-md-6">
                        {/* jquery validation */}
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Admin Login</h3>
                            </div>
                            {/* /.card-header */}
                            {/* form start */}
                            <form role="form" id="quickForm">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control"  placeholder="Enter email" onChange={getEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={getPassword}/>
                                    </div>
                                    <div className={'form-group'}>
                                        <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* /.card */}
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}


export default AdminLogin;
