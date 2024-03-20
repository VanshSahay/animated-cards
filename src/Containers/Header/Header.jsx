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
            <div className='h-[700px] w-[400px] rounded-3xl bg-black absolute opacity-50 transition hover:opacity-0 ease-in duration-200'></div>
            <img src={card.img} alt=".." className='object-cover h-[700px] w-[400px] float-left rounded-3xl'/>
        </div>    
    )

  return (
    <div className='flex justify-around h-screen items-center bg-gradient-to-t from-[#050f19] to-[#2386eb]'>{carddivs}</div>
  )
}

export default Header