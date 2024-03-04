import { appendChildren, createHtmlElement } from '../../../helpers/htmlElements'
import './nav.scss'
import { navItem } from './navItem/navItem'

const navLinks = [
  { linkName: 'About', link: '#about' },
  { linkName: 'Projects', link: '#projects' },
  { linkName: 'Contact me', link: '#contact' }
]

export const nav = () => {
  const menuContainer = createHtmlElement('label', ['menu'])
  const menu = createHtmlElement('input', ['menu-trigger'])
  menu.type = 'checkbox'

  appendChildren(menuContainer, menu)
  const navElement = createHtmlElement('nav', ['nav'])

  navLinks.forEach((navLink) => {
    const navItemElement = navItem(navLink.linkName, navLink.link)
    appendChildren(navElement, navItemElement)
  })

  return { menuContainer, navElement }
}
