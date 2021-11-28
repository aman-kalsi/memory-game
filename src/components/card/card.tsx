import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './card.css'

export interface ICard {
  id: number,
  cardColor: string,
  matched: boolean
}

export const Card = (props: {card: ICard, handleChoice: (card:ICard)=>void, flipped: boolean} ) => {
  const {card, handleChoice, flipped} = props;
  
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        rotateY: flipped ? 180 : 0
      }}
    >
      {!card.matched && flipped && <div className="front" style={{background: card.cardColor}}/>}
      {!card.matched && !flipped && <div className="back" onClick={() => handleClick()}/>}
    </motion.div>
  );
}
