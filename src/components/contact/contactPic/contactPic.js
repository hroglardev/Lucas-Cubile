import { appendChildren, createHtmlElement } from '../../../helpers/htmlElements'
import './contactPic.scss'
import ContactPic from '../../../assets/images/contact-pic.webp'

export const contactPic = () => {
  const imageContainer = createHtmlElement('div', ['pic-container'])
  const image = createHtmlElement('img', ['contact-pic'])
  image.src = ContactPic
  image.alt = 'Lucas Cubile, owner of the website'

  appendChildren(imageContainer, image)
  return imageContainer
}
