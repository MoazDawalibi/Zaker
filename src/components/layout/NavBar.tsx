import React, { useEffect, useState } from 'react';
import { RoutesEnums } from '../../enums/RoutesEnums';
import { MdLanguage } from 'react-icons/md';
import { FaEllipsis } from 'react-icons/fa6';
import { Popover } from 'antd';
import { navBar as navBarData, Setting } from '../../../data.json';
import { useLocation } from 'react-router-dom';

interface NavLink {
  path: string; 
  label: string;
}

const NavBar: React.FC = () => {
  const location = useLocation(); 

  const links: NavLink[] = [
    { path: RoutesEnums.HOME, label: navBarData.link1 },
    { path: RoutesEnums.FEATURES, label: navBarData.link2 },
    { path: RoutesEnums.HOW_IT_WORK, label: navBarData.link3 },
    { path: RoutesEnums.SCREEN_SHOOT, label: navBarData.link4 },
    { path: RoutesEnums.NOTE, label: navBarData.link5 },
    { path: RoutesEnums.CONTACT, label: navBarData.link6 },
    { path: RoutesEnums.PRIVACY, label: navBarData.link7 },
    { path: RoutesEnums.DOWNLOAD, label: navBarData.link8 },
  ];

  const [active, setActive] = useState(location.pathname + location.hash); 

  useEffect(() => {
    setActive(location.pathname + location.hash);
    if (location.pathname + location.hash === '/') {
      setActive(location.pathname+'#');
    }
  }, [location.pathname, location.hash]);

  const handleToggle = () => setOpen(!Open);
  const [Open, setOpen] = useState(false);

  const NavBarContent = (
    <div className="NavBarContent">
      <ul className="NavBarLinks">
        {links.map((link) => (
          <li onClick={handleToggle} key={link.path} className="nav-item">
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="NavBar">
      <img loading="lazy" src={Setting.Logo} className="scale" alt="" />
      <ul className="NavBarLinks">
        {links.map((link) => {          
          const isActive = active === link.path;

          return (
            <li
              key={link.path}
              onClick={() => setActive(link.path)}
              className={isActive ? 'activeLink' : ''}
            >
              <a href={link.path}>{link.label}</a>
            </li>
          );
        })}
      </ul>

      <div>
        <MdLanguage />
        <article>
          <Popover open={Open} content={NavBarContent}>
            <FaEllipsis onClick={handleToggle} />
          </Popover>
        </article>
      </div>
    </nav>
  );
};

export default NavBar;
