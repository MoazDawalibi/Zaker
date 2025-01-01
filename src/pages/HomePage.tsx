import { BsGooglePlay } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { Home, Links } from '../../data.json';

const HomePage = () => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="HomePage" id="#">
      <main>
        <h1>
          {Home.title} <h2> {Home.ApplicationName} </h2>
        </h1>
        <p>{Home.description}</p>
        <div>
          <button onClick={() => handleClick(Links.google_play_link)}>
            <div>
              <BsGooglePlay />
            </div>
            <div>
              <h6>{Home.buttonLabel}</h6>
              <h5> {Home.button1} </h5>
            </div>
          </button>
          <button onClick={() => handleClick(Links.apple_store_link)}>
            <div>
              <FaApple />
            </div>
            <div>
              <h6>{Home.buttonLabel}</h6>
              <h5> {Home.button2} </h5>
            </div>
          </button>
        </div>
      </main>
      <img loading="lazy" className="circle" src="/Setting/circle.png" alt="" />
      <img loading="lazy" className="shape" src="/Setting/shape.svg" alt="" />
      <img loading="lazy" className="slider" src={Home.mainImage} alt="" />
    </div>
  );
};

export default HomePage;
