import { Button } from 'antd';
import { FaHandPointUp } from 'react-icons/fa';
import useScroll from '../../hooks/useScroll';

const BackToTopButton = () => {
  const showButton = useScroll(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className={`back_to_top ${showButton ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <FaHandPointUp />
    </Button>
  );
};

export default BackToTopButton;
