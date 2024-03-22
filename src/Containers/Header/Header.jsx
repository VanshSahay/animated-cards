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
        <div key={card.id} className='max-h-[700px] max-w-[400px] flex justify-center items-center group'>
            <img src={card.img} alt=".." className='object-cover h-[700px] w-[400px] float-left rounded-3xl absolute pointer-events-none'/>
            <div className='h-[700px] w-[400px] rounded-3xl bg-black absolute opacity-50 transition group-hover:opacity-0 ease-in duration-200'></div>
            <div className=' min-h-[700px] min-w-[400px] flex justify-center relative transition opacity-0 group-hover:opacity-100 hover:-translate-y-16 ease-out duration-300'>
                <h1 className='text-4xl font-bold w-fit h-fit'>Click Me!</h1>
            </div>
        </div>   
    )

  return (
    <div className='flex justify-around h-screen items-center bg-gradient-to-t from-[#050f19] to-[#2386eb]'>{carddivs}</div>
  )
}

export default Header