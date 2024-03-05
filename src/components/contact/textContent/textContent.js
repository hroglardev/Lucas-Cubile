import { createHtmlElement, appendChildren } from '../../../helpers/htmlElements'
import { icon } from '../../iconComponent/icon'
import './textContent.scss'
import Phone from '../../../assets/icons/phone.svg'
import WhatsApp from '../../../assets/icons/whatsapp.svg'
import Email from '../../../assets/icons/email.svg'
import Github from '../../../assets/icons/github.svg'
import LinkedIn from '../../../assets/icons/linkedIn.svg'

export const contactText = () => {
  const wrapper = createHtmlElement('div', ['text-wrapper'])
  const title = createHtmlElement('h2', ['title'], 'Contact me')
  const contactPhrase = createHtmlElement('p', ['contact-phrase'], 'Please get in touch if you think our work could be mutually beneficial!')
  const location = createHtmlElement('p', ['location'], 'Villa la angostura, Neuquén - Argentina')

  const phoneContainer = createHtmlElement('div', ['phone-container'])
  const whatsAppContainer = createHtmlElement('div', ['whatsApp-container'])
  const emailContainer = createHtmlElement('div', ['email-container'])
  const socialIcons = createHtmlElement('div', ['social-icons'])

  const phoneIcon = icon(Phone, 'phone')
  const whatsAppIcon = icon(WhatsApp, 'whatsapp')
  const emailIcon = icon(Email, 'email')
  const phone = createHtmlElement('p', ['phone'], `+549 1168-335-925`)
  const whatsApp = createHtmlElement('p', ['whatsapp'], `+39 3881-169-579`)
  const email = createHtmlElement('p', ['email'], `cubilelucas@gmail.com`)

  const githubLink = createHtmlElement('a')
  const linkedInLink = createHtmlElement('a')
  const githubIcon = icon(Github, 'github', '40px')
  const linkedInIcon = icon(LinkedIn, 'linkedIn', '40px')

  githubLink.setAttribute('href', 'https://github.com/hroglardev/')
  githubLink.setAttribute('target', '_blank')

  linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/lucas-martin-cubile/')
  linkedInLink.setAttribute('target', '_blank')

  appendChildren(githubLink, githubIcon)
  appendChildren(linkedInLink, linkedInIcon)
  appendChildren(phoneContainer, phoneIcon, phone)
  appendChildren(whatsAppContainer, whatsAppIcon, whatsApp)
  appendChildren(emailContainer, emailIcon, email)
  appendChildren(socialIcons, githubLink, linkedInLink)
  appendChildren(wrapper, title, contactPhrase, location, phoneContainer, whatsAppContainer, emailContainer, socialIcons)
  return wrapper
}
