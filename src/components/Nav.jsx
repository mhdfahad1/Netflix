import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
    })
    console.log(show);
    return (
        <div className={`nav${show && 'nav-black'}`}>
            <img width={'150px'} src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
    )
}
