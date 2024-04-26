import {
  appendChildren,
  createHtmlElement
} from '../../../helpers/htmlElements';
import './nav.scss';
import { navItem } from './navItem/navItem';

const navLinks = [
  { linkName: 'About', link: '#about' },
  { linkName: 'Projects', link: '#projects' },
  { linkName: 'Contact me', link: '#contact' }
];

export const nav = () => {
  const menuContainer = createHtmlElement('label', ['menu']);
  const menu = createHtmlElement('input', ['menu-trigger']);
  const list = createHtmlElement('ul', ['nav-list']);
  const navElement = createHtmlElement('nav', ['nav']);
  menu.type = 'checkbox';

  appendChildren(menuContainer, menu);
  appendChildren(navElement, list);

  navLinks.forEach((navLink) => {
    const navItemElement = navItem(navLink.linkName, navLink.link);
    navItemElement.addEventListener('click', () => {
      menu.checked = false;
    });
    appendChildren(list, navItemElement);
  });

  console.log(menu.checked);
  return { menuContainer, navElement };
};
