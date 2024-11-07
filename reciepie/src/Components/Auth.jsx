import React from "react";

function Auth({ register }) {
  const registeeres = register ? true : false;
  return (
    <>
      <div className=" container d-flex align-items-center justify-content-center mt-4 flex-column">
        <div>
          {registeeres ? (
            <div>
              <h3 className="fw-bold">REGISTER FORM</h3>
              
              <input
                type="text"
                name=""
                id=""
                placeholder="enter the name"
                className="form-control mb-4"
              />
              </div>
              
            
          ) : (
            <div>
              <h3 className="fw-bold ">LOGIN FORM</h3>

              
            </div>
          )}
        </div>
        

        <div className=" d-flex align-items-center justify-content-center flex-column">
        <input
                type="text"
                name=""
                id=""
                placeholder="enter the email"
                className="form-control"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="enter the password"
                className="form-control mt-4"
              />
          {registeeres ? (
            <div>
              <button className="btn btn-primary w-100 mt-3">REGISTER</button>

              <a href="/" className="mt-3">
                new User please Login
              </a>
            </div>
          ) : (
            <div>
              <button className="btn btn-primary w-100 mt-3">LOGIN</button>

              <a href="/register" className="mt-3">
                new User please Register
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Auth;
