import './status.css'

export const Status = (props: {cardFlips: number}) => {
  const {cardFlips} = props

  return (
    <h1 className="flips">{'Flips: ' + cardFlips}</h1>
  );
}