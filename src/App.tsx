import { useEffect, useState } from 'react';
import './App.css';
import { ICard, Card } from './components/card/card';
import { NewGameButton } from './components/new-game-button/new-game-button';

const cardImages = [
  'img/gingerbreadman.png',
  'img/gingerbreadwoman.png',
  'img/mr boy.png',
  'img/mr penguin.png',
  'img/mr santa.png',
  'img/mr snowman.png',
  'img/mrs santa.png',
  'img/ms girl.png',
  'img/ms penguin.png',
  'img/ms snowwoman.png',
  'img/reindeer.png',
  'img/rudolf.png'
]

const App = () => {
  const [cards, setCards] = useState<Array<ICard>>([]);
  const [cardFlips, setCardFlips] = useState<number>(0);
  const [firstChoice, setFirstChoice] = useState<ICard|null>(null);
  const [secondChoice, setSecondChoice] = useState<ICard|null>(null);

  const shuffleCards = () => {
    let shuffledImages = [...cardImages, ...cardImages];
    let currentIndex = shuffledImages.length;
    let idAssignment = 0;
    let randomIndex;

    while (currentIndex--) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      [shuffledImages[currentIndex], shuffledImages[randomIndex]] = [shuffledImages[randomIndex], shuffledImages[currentIndex]];
    }
    
    setCards( shuffledImages.map((card) => ({id: idAssignment++, cardImage: card, matched: false})) )
    setCardFlips(0)
  }

  const handleChoice = (card: ICard) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    setCardFlips(cardFlips+1)
  }

  useEffect(() => {
    if (firstChoice && secondChoice && (firstChoice.id !== secondChoice.id)) {
      if (firstChoice.cardImage === secondChoice.cardImage) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.cardImage === firstChoice.cardImage) {
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
      <h1 className="memory-match">Chtistmas-Themed Memory Match (by Aman Kalsi)</h1>
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
