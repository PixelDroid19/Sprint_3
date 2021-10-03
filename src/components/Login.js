import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { Logo, IconFace, IconGithub, IconGoogle } from "../assets/export";
import {
  loginGoogle,
  loginFacebook,
  loginGithub,
  loginEmailAndPasworld,
} from "../actions/actionLogin";
import { Formik } from 'formik'

const Login = ({history}) => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handlerLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailAndPasworld(email, password));
    history.replace('/');
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
    history.replace('/');
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
    history.replace('/');
  };

  const handleGithub = () => {
    dispatch(loginGithub());
    history.replace('/');
  };

  return (
    <div className="containern">
      <div className="row rounded-end">

        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded imgCover">

        </div>

        <div className="col">
          <div className="text-end">
            
          </div>

          <h2 className="fw-bold text-center py-5">Bienvenido</h2>

          <form onSubmit={handlerLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-4 form-check">
              <input
                type="checkbox"
                name="connect"
                className="form-check-input"
              />
              <label htmlFor="connect" className="form-check-label">
                Mantener conectado
              </label>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                iniciar sesión
              </button>
            </div>

            <div className="my-3">
              <Link to="/registro">
                <span>No tienes cuenta?</span>
              </Link>
            </div>
          </form>

          <div className="container w-100 my-5">
            <div className="row text-center">
              <div className="col-12">Iniciar sesión con </div>
            </div>

            <div className="row align-items-center">

              <div className="col">
                <button
                  className="btn btn-outline-primary w-100 my-1"
                  onClick={handleFacebook}
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img width="32" src={IconFace} alt="LoginWithFacebook" />
                    </div>

                    <div className="col-12 col-md-10 text-center">Facebook</div>
                  </div>
                </button>
              </div>

              <div className="col">
                <button
                  className="btn btn-outline-danger w-100 my-1"
                  onClick={handleGoogle}
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img width="32" src={IconGoogle} alt="LoginWithGoogle" />
                    </div>

                    <div className="col-12 col-md-10 text-center">Google</div>
                  </div>
                </button>
              </div>
            
              <div className="col">
                <button
                  className="btn btn-outline-dark w-100 my-1"
                  onClick={handleGithub}
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img width="32" src={IconGithub} alt="LoginWithGithub" />
                    </div>

                    <div className="col-12 col-md-10 text-centerr">Github</div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
