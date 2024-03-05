import { appendChildren, createHtmlElement } from '../../../helpers/htmlElements'
import Github from '../../../assets/icons/github.svg'
import Link from '../../../assets/icons/link.svg'
import './project.scss'
import { icon } from '../../iconComponent/icon'

export const project = (projectName, projectDescription, src, alt, repoLink, liveLink, technologies) => {
  const card = createHtmlElement('article', ['card'])
  const flipper = createHtmlElement('div', ['flipper'])
  const front = createHtmlElement('div', ['card-front'])
  const back = createHtmlElement('div', ['card-back'])

  // front of Card
  const imageContainer = createHtmlElement('div', ['card-image-container'])
  const image = createHtmlElement('img', ['card-image'])
  const titleContainer = createHtmlElement('div', ['title-container'])
  const title = createHtmlElement('h3', ['project-title'], projectName)
  const description = createHtmlElement('p', ['project-description'], projectDescription)

  image.src = src
  image.alt = alt

  // back of card
  const visitProject = createHtmlElement('p', ['visit-project'], 'Visit repository or live app:')
  const technologiesUsed = createHtmlElement('p', ['techs-used'], 'Tools used:')
  const linkIcons = createHtmlElement('div', ['project-icons'])
  const gitHubIcon = icon(Github, 'Github', '50px')
  const linktoProjectIcon = icon(Link, 'Link', '50px')
  const repositoryLink = createHtmlElement('a')
  const liveVersionLink = createHtmlElement('a')
  const techIcons = createHtmlElement('div', ['tech-icons'])
  repositoryLink.setAttribute('href', repoLink)
  liveVersionLink.setAttribute('href', liveLink)
  repositoryLink.setAttribute('target', '_blank')
  liveVersionLink.setAttribute('target', '_blank')

  technologies.forEach((technology) => {
    const techIcon = icon(technology.icon, technology.alt, '60px')
    appendChildren(techIcons, techIcon)
  })

  appendChildren(imageContainer, image)
  appendChildren(titleContainer, title)
  appendChildren(repositoryLink, gitHubIcon)
  appendChildren(liveVersionLink, linktoProjectIcon)
  appendChildren(linkIcons, repositoryLink, liveVersionLink)
  appendChildren(front, imageContainer, titleContainer, description)
  appendChildren(back, visitProject, linkIcons, technologiesUsed, techIcons)
  appendChildren(flipper, front, back)
  appendChildren(card, flipper)

  return card
}
