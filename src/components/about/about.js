import { appendChildren, createHtmlElement } from '../../helpers/htmlElements'

import './about.scss'
import { aboutText } from './aboutText/aboutText'
import { profilePic } from './profilePic/profilePic'

export const about = () => {
  const section = createHtmlElement('section', ['about'], '', 'about')
  const diagonalBackground = createHtmlElement('div', ['diagonal'])

  const imageContainer = profilePic()
  const textContainer = aboutText()

  appendChildren(section, imageContainer, textContainer)
  return { section, diagonalBackground }
}
