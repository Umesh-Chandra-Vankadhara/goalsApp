import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="from-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="from-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

// import { useState } from "react";
// import { FaSignAlt } from "react-icons/fa";

// export const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = formData;

//   const handleOnchange = (e) => {
//     const { value, name } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <section className="heading">
//         <h1>
//           <FaSignAlt /> Login
//         </h1>
//         <p>Login and start setting goals</p>
//       </section>
//       <section className="form">
//         <from onSubmit={onSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               className="from-control"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleOnchange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="from-control"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handleOnchange}
//             />
//           </div>
//           <div className="form-group">
//             <button className="btn btn-block" onClick={onSubmit}>
//               Login
//             </button>
//           </div>
//         </from>
//       </section>
//     </>
//   );
// };
