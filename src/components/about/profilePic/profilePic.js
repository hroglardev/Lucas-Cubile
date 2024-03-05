import './profilePic.scss'
import ProfilePic from '../../../assets/images/profile.jpeg'
import { createHtmlElement, appendChildren } from '../../../helpers/htmlElements'

export const profilePic = () => {
  const imageContainer = createHtmlElement('div', ['image-container'])
  const image = createHtmlElement('img', ['main-image'])
  image.src = ProfilePic
  image.alt = 'Lucas Cubile, owner of this website'
  appendChildren(imageContainer, image)

  return imageContainer
}
