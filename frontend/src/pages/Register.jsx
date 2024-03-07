import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "./../components/Spinner";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { email, name, password, password2 } = formData;
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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="from-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleOnchange}
            />
          </div>
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
            <input
              type="password"
              className="from-control"
              id="password2"
              name="password2"
              placeholder="Enter your password2"
              value={password2}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
