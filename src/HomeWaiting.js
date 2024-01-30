import iconOne from './assets/icon/iconOne.png';
import iconTwo from './assets/icon/iconTwo.png';
import iconThree from './assets/icon/iconThree.png';


function HomeWaiting() {

  return (
    <div className="HomeWaiting-main-container">
      <div className="HomeWaiting-container">
        <div className="HomeWaiting-icon-container">
          <img className="HomeWaiting-icon" src={iconOne} alt="icon" />
        </div>
        <p className="HomeWaiting-par">Interesting Advent calendar</p>
      </div>

      <div className="HomeWaiting-container">
        <div className="HomeWaiting-icon-container">
          <img className="HomeWaiting-icon" src={iconTwo} alt="icon" />
        </div>
        <p className="HomeWaiting-par">Funny Christmas movies</p>
      </div>

      <div className="HomeWaiting-container">
        <div className="HomeWaiting-icon-container">
          <img className="HomeWaiting-icon" src={iconThree} alt="icon" />
        </div>
        <p className="HomeWaiting-par">A magical and joyful mood</p>
      </div>
    </div>
  );
}

export default HomeWaiting;