import React from 'react'
import './User.css';
/*
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
*/

//<HomeIcon/> 01 rue Laurent lavoisier 59370 Mons-en-baroeul</p>
// <div className=''></div>
// <p className='user__info'></p>

 
function User() {
    return (
        <div className='user'>
            <img src="./images/image.png" alt="" className='ma_photo' />
            <h1 className='user__name'> Mouhamed DIA </h1>
            <p className='profession'> WEB ANALYST</p>
            <div className='user__infos'>
                <p className='user__info'>
                    Adresse: 01 rue Laurent lavoisier 59370 Mons-en-baroeul</p>
                <p className='user__info'>
                    <a href="tel:+33760286493">Tel: 0760286493</a>
                </p>
                <p className='user__info'>
                    <a href="mailto:mouhamed.92.dia@gmail.com">Adresse mail: mouhamed.92.dia@gmail.com</a>
                </p>
                <p className='user__info'>Date de naissance: Date de Naissance: 16 Août 1995</p>
                <p className='user__info'>Lieu de Naissance: Dakar-Senegal</p>

            </div>


        </div>

    )
}

export default User
