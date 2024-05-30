//Pagina para las tarifas de Publicidad 
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/general.css'
import Cookies from 'js-cookie'

export function Rates() {
    const navigate = useNavigate()
    const [checkB, setCheckB] = useState(false)
    const [checkP, setCheckP] = useState(false)


    const handleCheck = () => {
        if (!checkB && !checkP) {
            alert("Por favor seleccione una tarifa")
        }
        if (checkB == true && checkP == true) {
            alert("Estan marcadas las dos casillas, por favor marque solo una casilla")
        } else if (checkB == true) {
            Cookies.set('type', 'basic')
            alert("Tarifa basica activada,  reedirigiendo al pago")
            setTimeout(() => {
                navigate('/payments')
            }, 2000);
        } else if (checkP == true) {
            Cookies.set('type', 'premiun')
            alert("Tarifa Premium activada,  reedirigiendo al pago")
            setTimeout(() => {
                navigate('/payments')
            }, 2000);
        }
    }
    useEffect(() => {
        const token = Cookies.get('token')
        if (!token) {
            navigate('/home')
        }

    }, [])
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src="../src/images/principales/logo.png" alt="" className='w-[150px] my-[60px]' />
                    <div className="general-part1 ">
                        <ol className='flex-col '>
                            <li>Explorar</li>
                            <li >Interacciones</li>
                            <li >Premium</li>
                            <li >Mensaje</li>
                            <li >Configuracion</li>
                        </ol>
                    </div>
                    <img src="../src/images/principales/logo.png" alt="" className='w-[100px] my-[60px]' />
                </div>
                <div className="general-box2 z-40">
                    <div className='flex-col w-[100%]'>
                        <NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
                        <h1 className="text-3xl font-black m-2 text-center">Tarifas de Publicidad</h1>
                    </div>
                    <div className='flex'>
                        <table className="w-[100%] text-center m-10 text-lg ">
                            <thead>
                                <tr className=" text-white bg-black ">
                                    <th>Tipos de Publicidad</th>
                                    <th>Basica</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2" >
                                    <th>1 Publicacion Diaria</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>5 Publicaciones Diarias</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Estadisricas de alcance</th>
                                    <td className='text-green-500'> </td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Apoyo con IA</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Precio</th>
                                    <td className='font-bold'>5$</td>
                                    <td className='font-bold'>7$</td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Seleccione el tipo de Plan</th>
                                    <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black hover: text-green-500' onChange={(e) => setCheckB(e.target.checked)} /></td>
                                    <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black hover: text-green-500' onChange={(e) => setCheckP(e.target.checked)} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex text-center mx-5'>
                        <h3>Seleccione que plan de publicidad desea adquirir por un mes y haga click en confirmar para seguir con el proceso de pago</h3>
                    </div>
                    <div className='flex justify-center w-[100%]' >
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-lg m-4" onClick={handleCheck}>Confirmar</button>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3 z-0">
                    <div className="flex justify-center w-[100%] ">
                        <ul className='flex m-5'>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-bell"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-gear"></i></li>
                        </ul>
                    </div>
                    <div className='general-part3'>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}