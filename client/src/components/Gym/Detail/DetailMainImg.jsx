import pikachu from '../../../assets/images/pikachu.JPG';

function GymDetailMainImg({ gymImage }) {
  return (
    <>
      <div className="h-48 w-90">
        <img
          src={gymImage === undefined ? pikachu : gymImage}
          alt="헬스장 사진"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}

export default GymDetailMainImg;
