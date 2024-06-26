// logica de login
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { validCorreo, validPassword } from "../components/Regext.jsx";
import axios from "axios";
import "../styles/login.css";
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'


export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null)
  const navigate = useNavigate();

  const senData = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Campos vacios",
        showConfirmButton: false,
        timer: 1200
      });
      return
    }
    if (!validCorreo.test(data.email)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Datos invalidos",
        showConfirmButton: false,
        timer: 1200
      });
      return
    }
    if (!validPassword.test(data.password)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Datos invalidos",
        showConfirmButton: false,
        timer: 1200
      });
      return
    }
    else {
      try {
        const response = await axios.post("http://localhost:3000/social/login", data);
        const info = response.data
        setToken(info.token)
        Cookies.set('token', `${info.token}`)
        Swal.fire({
          position: "success",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1200
        });
        setTimeout(function () {
          navigate("/");
        }, 2000);
        return
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  useEffect(() => {
    const data = Cookies.get('token')
    if (data) {
      navigate('/Home')
    }
  });
  return (
    <div className="login-body">
      <div className="containerL">
        <div className="box1">
          <img src="../src/images/principales/logo.png" alt="logo" className="w-[150px] m-2" />
          <h1 className="text-3xl font-black ">MOUNTS</h1>
        </div>
        <div className="box2">
          <form className='flex flex-col items-center bg-transparent' onSubmit={senData}>
            <h3 className="text-lg font-black items-start m-2">Correo electronico</h3>
            <label className='flex m-2 items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
              <input type="Email" placeholder="Ingresa tu Email" className='p-1 rounded-md' onChange={(e) => setData({ ...data, email: e.target.value })} />
            </label>
            <h3 className="text-lg font-black items-start m-2">Contraseña</h3>
            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
              <input type="password" placeholder="Contraseña" className='p-1 rounded-md' onChange={(e) => setData({ ...data, password: e.target.value })} />
            </label>
            <div className="flex">
              <p className="text-sm text-center m-1">Haga Click aqui para iniciar sesion directamente: </p>
            </div>
            <div className="flex">
              <button className="border w-12 py-3 m-1 rounded-lg  hover:bg-gray-800 hover:text-white" disabled>
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-red-600" disabled>
                <i className="fa-brands fa-google"></i>
              </button>
              <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-blue-600" disabled>
                <i className="fa-brands fa-facebook"></i>
              </button>
            </div>
            <NavLink to="/recoverEmail" className="text-lg text-center m-1 text-blue-400 hover:text-blue-800">¿Olviste tu contraseña?</NavLink>
            <input type="submit" value="Iniciar Sesion" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg m-4' />
          </form>
        </div>
      </div>
      <div className="containerL">
        <div className="box3">
          <p>¿No tienes cuenta?</p>
          <NavLink to="/register" className="text-lg text-center m-1 text-blue-400">Registrate</NavLink>
        </div>
      </div>
      <div className="containerF">
        <p className="text-xl text-center m-1 font-bold ">Descarga la app</p>
        <div className="flex flex-col relative ">
          <img src="../src/images/login/img2.png" alt="app" className="w-[400px] position:relative z-0 " />
          <img src="../src/images/login/img1.png" alt="fondo" className="w-[400px] absolute inset-0 z-[-1] " />
        </div>
      </div>
    </div>
  );
}


