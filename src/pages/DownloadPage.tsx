import { BsGooglePlay } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { DownloadPage as DownloadPageData, Links } from '../../data.json';

const DownloadPage = () => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="DownloadPage">
      <main>
        <h1> {DownloadPageData.title} </h1>
        <p> {DownloadPageData.description} </p>
        <div>
          <button onClick={() => handleClick(Links.google_play_link)}>
            <div>
              <BsGooglePlay />
            </div>
            <div>
              <h6>{DownloadPageData.buttonLabel}</h6>
              <h5> {DownloadPageData.button1} </h5>
            </div>
          </button>
          <button onClick={() => handleClick(Links.apple_store_link)}>
            <div>
              <FaApple />
            </div>
            <div>
              <h6>{DownloadPageData.buttonLabel}</h6>
              <h5> {DownloadPageData.button2} </h5>
            </div>
          </button>
        </div>
      </main>

      <div>
        <img
          loading="lazy"
          className="circle"
          src="/Setting/circle.png"
          alt=""
        />
      </div>

      <img
        loading="lazy"
        className="main scale"
        src={DownloadPageData.img}
        alt=""
      />
    </div>
  );
};

export default DownloadPage;
