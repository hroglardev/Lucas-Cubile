import { createHtmlElement } from '../../../helpers/htmlElements'
import Logo from '../../../assets/icons/page-logo.svg'
import './logo.scss'

export const logo = () => {
  const icon = createHtmlElement('img', ['page-logo'])
  const pageTitle = createHtmlElement('h1', ['page-title'], 'Lucas Cubile')

  icon.src = Logo
  icon.alt = 'portfolio'

  return { icon, pageTitle }
}
