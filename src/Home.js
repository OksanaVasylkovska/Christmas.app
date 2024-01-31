import HomeWaiting from "./HomeWaiting";
import Video from "./Video";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-inner-container">
        <div className="Home-cover-container">
          <div className="Home-coverText-container">
            <h1 className="Home-heading">In anticipation of Christmas... </h1>
          </div>
        </div>
        <h2 className="Home-waiting-header">Waiting for you</h2>
        <HomeWaiting />
        <Video />
      </div>
    </div>
  );
        }
export default Home;
