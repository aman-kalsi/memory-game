import { useEffect, useState } from 'react';
import './App.css';
import { ICard, Card } from './components/card/card';
import { NewGameButton } from './components/new-game-button/new-game-button';

const cardColors = [
  'blue',
  'black',
  'red',
  'green',
  'orange',
  'purple',
  'yellow',
  'gray'
]

const App = () => {
  const [cards, setCards] = useState<Array<ICard>>([]);
  const [cardFlips, setCardFlips] = useState<number>(0);
  const [firstChoice, setFirstChoice] = useState<ICard|null>(null);
  const [secondChoice, setSecondChoice] = useState<ICard|null>(null);

  const shuffleCards = () => {
    let shuffledColors = [...cardColors, ...cardColors];
    let currentIndex = shuffledColors.length;
    let idAssignment = 0;
    let randomIndex;

    while (currentIndex--) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      [shuffledColors[currentIndex], shuffledColors[randomIndex]] = [shuffledColors[randomIndex], shuffledColors[currentIndex]];
    }
    
    setCards( shuffledColors.map((card) => ({id: idAssignment++, cardColor: card, matched: false})) )
    setCardFlips(0)
  }

  const handleChoice = (card: ICard) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    setCardFlips(cardFlips+1)
  }

  useEffect(() => {
    if (firstChoice && secondChoice && (firstChoice.id !== secondChoice.id)) {
      if (firstChoice.cardColor === secondChoice.cardColor) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.cardColor === firstChoice.cardColor) {
                return {...card, matched: true}
              }
              return card
            })
          );
          resetChoices();
        }, 500)
      }
      else {
        setTimeout(() => {resetChoices()}, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  }

  return (
    <div className="App">
      <h1 className="memory-match">Memory Match</h1>
      <NewGameButton onClick={() => shuffleCards()}/>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === firstChoice || card === secondChoice}/>    
        ))}
      </div>
    </div>
  );
}

export default App;
