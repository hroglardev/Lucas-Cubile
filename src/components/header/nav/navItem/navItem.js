import {
  appendChildren,
  createHtmlElement
} from '../../../../helpers/htmlElements';
import './navItem.scss';

export const navItem = (text, link) => {
  const navListItem = createHtmlElement('li', ['nav-list-item']);
  const navLinkItem = createHtmlElement('a', ['nav-link-item'], text);
  navLinkItem.setAttribute('href', link);

  appendChildren(navListItem, navLinkItem);

  return navListItem;
};
