import { motion } from 'framer-motion';
import './victory.css'

export const Victory = (props: {cardFlips: number}) => {
  const {cardFlips} = props

  return (
    <motion.div
      initial={{ 
        opacity: 0,
      }}
      animate={{ 
        opacity: 1 
      }}
      exit={{ 
        opacity: 0
      }}>
      <h1 className='victory-message'>You've won with {cardFlips} flips! Happy Holidays :)</h1>
    </motion.div>
  );
}