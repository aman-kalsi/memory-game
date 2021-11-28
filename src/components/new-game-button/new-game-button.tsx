
import { motion } from 'framer-motion';
import './new-game-button.css';

export const NewGameButton = (props: {onClick: ()=>void}) => {
  return (
    <motion.button
      className="new-game-button"
      onClick={() => props.onClick()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >Start New Game</motion.button>
  );
}
