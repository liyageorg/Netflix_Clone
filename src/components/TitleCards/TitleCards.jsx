import React from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'
import { useEffect ,useRef} from 'react';


const TitleCards = ({title,category}) => {

  const cardsRef= useRef();
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {Cards_data.map((card,index)=>{
        return <div className="card"key={index}>
        <img src={card.image} alt=""/>
        <p>{card.name}</p>
    </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
