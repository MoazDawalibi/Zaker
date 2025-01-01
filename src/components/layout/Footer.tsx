import { Input } from 'antd';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { Footer as FooterData, Links, Setting } from '../../../data.json';

const Footer = () => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };
  return (
    <div className="Footer">
      <img loading="lazy" src={Setting.Logo} alt="logo" />
      <div>
        <FaTelegram onClick={() => handleClick(Links.telegram)} />
        <FaFacebook onClick={() => handleClick(Links.facebook)} />
        <FaInstagram onClick={() => handleClick(Links.instagram)} />
        <FaTwitter onClick={() => handleClick(Links.twitter)} />
      </div>
      <p>{FooterData.privacy}</p>
      <span className="FooterHeader">
        <span>
          <h1>{FooterData.title}</h1>
          <p>{FooterData.description}</p>
        </span>
        <div>
          <Input placeholder="أدخل بريدك الإلكتروني" />
          <div>
            <FaTelegram />
          </div>
        </div>
      </span>
    </div>
  );
};

export default Footer;
