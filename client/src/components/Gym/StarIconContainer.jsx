import StarIcon from '../UI/Icon/StarIcon';
import StarOutlineIcon from '../UI/Icon/StarOutlineIcon';

function StartIconContainer({ grade }) {
  const multipleStar = () => {
    const stars = [];

    for (let i = 1; i <= 5; i += 1) {
      if (i <= grade) {
        stars.push(<StarIcon key={i} />);
      } else {
        stars.push(<StarOutlineIcon key={i} />);
      }
    }

    return stars;
  };
  return <div className="flex items-center">{multipleStar()}</div>;
}

export default StartIconContainer;
