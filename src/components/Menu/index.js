import React from 'react';
import Logo from '../../assets/img/verde.png'
import './Menu.css'
import Button from '../Button'
import { Link } from "react-router-dom";

function Menu(){
    return(<nav className="Menu">
        <Link to="/">
            <img src={Logo}  className="Logo" alt="SemelpFlix"/>
        </Link>
        <Button as={Link} to="/cadastro/video" className="ButtonLink">
            Novo Vídeo
        </Button>
    </nav>
    );
}

export default Menu;