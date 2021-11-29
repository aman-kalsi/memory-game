import { motion } from 'framer-motion';
import './card.css'

export interface ICard {
  id: number,
  cardImage: string,
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
      initial={{opacity: 0}}
      animate={{
        rotateY: flipped ? 180 : 0,
        opacity: 1
      }}
    >
      {!card.matched && flipped && <img src={card.cardImage} alt="christmas image" className="front"/>}
      {!card.matched && !flipped && <img src="img/christmas tree.png" className="back" onClick={() => handleClick()}/>}
    </motion.div>
  );
}
