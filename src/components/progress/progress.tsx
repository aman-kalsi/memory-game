import { motion } from 'framer-motion';
import { createReadStream } from 'fs';
import { ICard } from '../card/card';
import './progress.css'

export const ProgressBar = (props: {cards: ICard[]}) => {
  const {cards} = props;

  const progress = () => {
    return cards.filter((card) => card.matched).length;
  }
  
  return (
    <div className="progress-bar-shell">
      <motion.div 
        className="progress-bar"
        initial={{
          width: 0,
          y: -5
        }}
        animate={{
          width: 25*progress()
        }}
      />
    </div>
  );
}