import './header.scss'
import { appendChildren, createHtmlElement } from '../../helpers/htmlElements'
import { logo } from './logo/logo'
import { nav } from './nav/nav'

export const header = () => {
  const sectionContainer = createHtmlElement('div', ['wrapper'])
  const logoContainer = createHtmlElement('div', ['logo-container'])
  const { icon, pageTitle } = logo()
  const { menuContainer, navElement } = nav()

  appendChildren(logoContainer, icon, pageTitle)
  appendChildren(sectionContainer, logoContainer, menuContainer, navElement)

  return sectionContainer
}
