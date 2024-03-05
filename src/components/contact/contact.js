import { appendChildren, createHtmlElement } from '../../helpers/htmlElements'
import './contact.scss'
import { contactPic } from './contactPic/contactPic'
import { contactText } from './textContent/textContent'

export const contact = () => {
  const section = createHtmlElement('section', ['contact-section'], '', 'contact')
  const text = contactText()
  const image = contactPic()
  appendChildren(section, text, image)

  return section
}
