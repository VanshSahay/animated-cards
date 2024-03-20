import React from 'react'


function Header() {
    const cards = [{
        id: 0,
        img : "src/assets/card1.jpg",
    }, {
        id: 1,
        img : 'src/assets/card2.jpg',
    }, {
        id: 2,
        img : 'src/assets/card3.jpg',
    }];

    const carddivs = cards.map(card => 
        <div key={card.id} className='max-h-[700px] max-w-[400px]'>
            <img src={card.img} alt=".." className='object-cover h-[700px] w-[400px] float-left'/>
        </div>    
    )

  return (
    <div className='flex justify-around h-screen items-center bg-gradient-to-t from-[#0D1F23] via-[#2D4A53] to-[#69818D]'>{carddivs}</div>
  )
}

export default Header