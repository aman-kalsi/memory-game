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
    <motion.div 
      className="progress-bar-shell"
      initial={{opacity:0,}}
      animate={{opacity: 1,}}
      exit= {{opacity: 0}}>
      <motion.div 
        className="progress-bar"
        initial={{
          opacity:0,
          width: 0,
          y: -5
        }}
        animate={{
          opacity: 1,
          width: 30*progress()
        }}
        exit= {{
          opacity: 0
        }}
      />
    </motion.div>
  );
}