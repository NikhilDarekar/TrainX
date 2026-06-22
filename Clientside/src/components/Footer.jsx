import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="md:mx-10">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            {/* left section*/ }
            <div>
                <img src={logo} alt='' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates harum, earum rerum dolorem quod corporis sint, neque repellendus quos deserunt modi itaque dolorum temporibus. Tempore aperiam sapiente rem ex ipsum eius sint maiores corporis!</p>

            </div>
            {/* center section*/ }
            <div>
                <p>Company</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right section*/ }
            <div>
                <p>Get in touch</p>
                <ul>
                    <li>+91 7498451860</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* coppyright text */}
            <p>Copyright @ 2024 TrainX. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer