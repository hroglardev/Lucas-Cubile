import './aboutText.scss'
import { createHtmlElement, appendChildren } from '../../../helpers/htmlElements'
import Github from '../../../assets/icons/github.svg'
import LinkedIn from '../../../assets/icons/linkedIn.svg'
import { icon } from '../../iconComponent/icon'
const aboutParagraph = `🎓 English Major transitioning to Software Engineering. 
  
🚀 Currently, I work with JavaScript and TypeScript using React, Express, and PostgreSQL/MongoDB to build fullstack web applications.`

const socialLinks = [
  { link: 'https://github.com/hroglardev', icon: Github, alt: 'Github' },
  { link: 'https://www.linkedin.com/in/lucas-martin-cubile/', icon: LinkedIn, alt: 'LinkedIn' }
]

export const aboutText = () => {
  const textContainer = createHtmlElement('article', ['about-text-container'])
  const title = createHtmlElement('h2', ['title'], 'About me')
  const text = createHtmlElement('p', ['about-text'], aboutParagraph)
  const iconContainer = createHtmlElement('div', ['about-icons'])

  socialLinks.forEach((link) => {
    const linkElement = createHtmlElement('a')
    const iconElement = icon(link.icon, link.alt)
    linkElement.setAttribute('href', link.link)
    linkElement.setAttribute('target', '_blank')
    appendChildren(linkElement, iconElement)
    appendChildren(iconContainer, linkElement)
  })

  appendChildren(textContainer, title, text, iconContainer)
  return textContainer
}
