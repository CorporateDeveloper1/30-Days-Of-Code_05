import React from 'react'
import fillet from '../Images/fillet.jpg'
import burger from '../Images/burger.jpeg'
import fish from '../Images/fish.jpg'
import pasta from '../Images/pasta.jpg'
import pizza from '../Images/pizza.jpg'
import spag from '../Images/spag.jpg'

export default function Items() {
  return (
    <div className="items">
      <div className="starter">
        <h2>IMPRESSIVE STARTER</h2>
        <p>Fresh & Delicious</p>
      </div>
      <div className="item-wrap">
        <div className="item1">
          
          <div className="title">
            
          <img src={fillet} alt="img" />
           <h3>FISH FILLET</h3>
          
          <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
          <span>$50</span>
        </div>
          <div className="title">
            <img src={burger} alt="img" />
            <h3>BURGER</h3>
            <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
            <span>$30</span>
          </div>
          <div className="title">
            <img src={fish} alt="img" />
            <h3>FISH</h3>
            <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
            <span>$63</span>
          </div>
        </div>
        <div className="item2">

          <div className="title">
            <img src={pasta} alt="img" />
            <h3>PASTA</h3>
            <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
            <span>$35</span>
          </div>
          <div className="title">
            <img src={pizza} alt="img" />
            <h3>PIZZA</h3>
            <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
            <span>$43</span>
          </div>
          <div className="title">
            <img src={spag} alt="img" />
            <h3>SPAGHETTI</h3>
            <p>Delectus consequuntur mel ut, ea mundi option malorum sit, in quaestio signiferumque quo.</p>
            <span>$44</span>
          </div>
        </div>
      </div>
     
      
    </div>
  )
}
