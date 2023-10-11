import React from 'react'
import '../css/item_card.css'
const ItemCard = () => {
  return (
    <section className='item-card'>
      <div className='item-image-container'>
        <button id='item-card-button'><svg viewBox="0 0 24 24" width='40px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 11L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34016 14.6474C5.55328 13.4935 5.55328 10.5065 7.34015 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.03289V7" stroke="#1877f2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 5V12M2 19V16" stroke="#1877f2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button>
        <img src="https://fdn.gsmarena.com/imgroot/reviews/23/motorola-edge-40-neo/lifestyle/-1024w2/gsmarena_001.jpg" alt="" />
        <button id='item-card-button'><svg viewBox="0 0 24 24" width='40px' height='40px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11L2 18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87084 2.38548C4.13419 1.26402 2 2.72368 2 5.03289V7" stroke="#1877f2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 5V12M22 16V19" stroke="#1877f2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button>
      </div>
      <div>
        <h2>Motorola Edge 40 Neo</h2>
        <h3>Display</h3>
        <p>Type : P-OLED, 1B colors, 144Hz, HDR10+, 1300 nits (peak)</p>
        <p>Size : 6.55 inches, 103.6 cm2 (~90.1% screen-to-body ratio)</p>
        <h3>Camera</h3>
        <p>Main Camera : 50 MP, f/1.8, (wide), 1/1.5", 1.0µm, multi-directional PDAF, OIS br + 13 MP, f/2.2, 120˚ (ultrawide), 1.12µm, PDAF</p>
        <p>Selfie Camera : 32 MP, f/2.4, (wide), 0.7µm </p>
        <h3>Battery</h3>
        <p>Type : Li-Po 5000 mAh, non-removable</p>
        <p>Charging : 68W wired, 50% in 15 min (advertised)</p>
        <h3>Price</h3>
        <p>	$ : 490.00 / £ : 389.99 / € : 399.00</p>
      </div>
    </section>
  )
}

export default ItemCard
