import { createHtmlElement } from '../../helpers/htmlElements'

export const icon = (src, alt, width = '30px') => {
  const iconElement = createHtmlElement('img')
  iconElement.src = src
  iconElement.alt = alt
  iconElement.style.width = width
  return iconElement
}
