import { appendChildren, createHtmlElement } from '../../helpers/htmlElements'
import Battleship from '../../assets/images/battleship.webp'
import WeatherApp from '../../assets/images/weatherApp.webp'
import ToDoList from '../../assets/images/to-do-list.webp'
import RestaurantPage from '../../assets/images/restaurant.webp'
import TicTacToe from '../../assets/images/tic-tac-toe.webp'
import Dashboard from '../../assets/images/dashboard.webp'
import './projects.scss'
import { project } from './project/project'
import Html from '../../assets/icons/html.svg'
import Css from '../../assets/icons/css.svg'
import JavaScript from '../../assets/icons/javascript.svg'
import Sass from '../../assets/icons/sass.svg'
import Webpack from '../../assets/icons/webpack.svg'

const PROJECTS = [
  {
    title: 'Battleship',
    repoLink: 'https://github.com/hroglardev/Battleship',
    liveLink: 'https://hroglardev.github.io/Battleship/',
    image: Battleship,
    alt: 'Battleship game',
    description: 'Play the classic battleship against a computer player. Sink all the enemy ships to beat it.',
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Sass, alt: 'sass' },
      { icon: JavaScript, alt: 'javascript' },
      { icon: Webpack, alt: 'webpack' }
    ]
  },
  {
    title: 'Weather App',
    repoLink: 'https://github.com/hroglardev/Weather-app',
    liveLink: 'https://hroglardev.github.io/Weather-app/',
    image: WeatherApp,
    alt: 'Weather forecast app',
    description: 'Check the weather in your city or anywhere in the world. Get a 7 day forecast to stay ahead.',
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Sass, alt: 'sass' },
      { icon: JavaScript, alt: 'javascript' },
      { icon: Webpack, alt: 'webpack' }
    ]
  },
  {
    title: 'To-do list',
    repoLink: 'https://github.com/hroglardev/To-do-list-js',
    liveLink: 'https://hroglardev.github.io/To-do-list-js/',
    image: ToDoList,
    alt: 'Task manager app',
    description: 'Organise your daily tasks by project. Color coded by priority and editable.',
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Css, alt: 'css' },
      { icon: JavaScript, alt: 'javascript' },
      { icon: Webpack, alt: 'webpack' }
    ]
  },
  {
    title: 'Restaurant page',
    repoLink: 'https://github.com/hroglardev/Restaurant-page',
    liveLink: 'https://hroglardev.github.io/Restaurant-page/',
    image: RestaurantPage,
    alt: 'Restaurant landing page',
    description: 'A simple restaurant landing page which has a basic tab navigation menu to alternate pages.',
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Css, alt: 'css' },
      { icon: JavaScript, alt: 'javascript' },
      { icon: Webpack, alt: 'webpack' }
    ]
  },
  {
    title: 'Tic-tac-toe',
    repoLink: 'https://github.com/hroglardev/Tic-tac-toe',
    liveLink: 'https://hroglardev.github.io/Tic-tac-toe/',
    image: TicTacToe,
    alt: 'Tic-tac-toe game',
    description: 'Play tic-tac-toe against a friend. Get three boxes in line with your symbol to beat the other player.',
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Css, alt: 'css' },
      { icon: JavaScript, alt: 'javascript' }
    ]
  },
  {
    title: 'Dashboard',
    repoLink: 'https://github.com/hroglardev/Dashboard',
    liveLink: 'https://hroglardev.github.io/Dashboard/',
    image: Dashboard,
    alt: 'Dashboard page',
    description: "A dashboard page simulating a user's profile page.",
    technologies: [
      { icon: Html, alt: 'html' },
      { icon: Css, alt: 'css' }
    ]
  }
]

export const projects = () => {
  const section = createHtmlElement('section', ['projects'], '', 'projects')
  const title = createHtmlElement('h2', ['title'], 'My projects')
  const projects = createHtmlElement('div', ['projects-container'])

  PROJECTS.forEach((projectItem) => {
    const card = project(projectItem.title, projectItem.description, projectItem.image, projectItem.alt, projectItem.repoLink, projectItem.liveLink, projectItem.technologies)

    appendChildren(projects, card)
  })

  appendChildren(section, title, projects)

  return section
}
