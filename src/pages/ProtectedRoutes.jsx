import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {

    const trainer = useSelector((store) => store.trainer);

    if(trainer.length > 2) {
      //permite renderizar la etiqueta del componente de esa ruta//
      return <Outlet/>
    } else {
      //permite redireccionar al usuario hacia la ruta que le coloquemos en el atributo to = ''//
      return <Navigate to='/'/>
    }
}
export default ProtectedRoutes