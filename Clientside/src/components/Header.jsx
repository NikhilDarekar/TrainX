import React from 'react'
import hero from '../assets/hero.png'

const Header = () => {
  return (
    <div>

        {/* left side */}
        <div>
            <p>Get your Membership <br/> in the best GYM</p>
            <div>
                <img src={hero} alt="" />
            </div>
        </div>

        {/* right side */}
    </div>
  )
}

export default Header