import { motion } from 'framer-motion';
import { useState } from 'react';
import './card.css'

export interface ICard {
  id: number,
  cardColor: string,
  matched: boolean
}

export const Card = (props: {card: ICard, handleChoice: (card:ICard)=>void}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const {card, handleChoice} = props;
  
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{
        rotateY: isFlipped ? 180 : 0
      }}
    >
      {isFlipped && <div className="front" style={{background: card.cardColor}}/>}
      {!isFlipped && <div className="back" onClick={() => handleClick()}/>}
    </motion.div>
  );
}
