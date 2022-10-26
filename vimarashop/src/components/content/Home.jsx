import React, {useState, useEffect, useContext} from 'react';
import { consultarBDD } from '../../service/functions';
import { DarkModeContext } from '../../context/DarkModeContext';
import {Link} from 'react-router-dom'

const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        consultarBDD('./json/products.json').then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"./assets/" + producto.imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Detalle: {producto.detalle}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);

    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            {productos}     
            
        </div>      
        
    );
}

export default Home;