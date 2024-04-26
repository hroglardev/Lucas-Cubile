'use strict';

import './styles/globals.scss';
import { header } from './components/header/header';
import { appendChildren, selectElement } from './helpers/htmlElements';
import { about } from './components/about/about';
import { projects } from './components/projects/projects';
import { contact } from './components/contact/contact';

const headerTag = selectElement('.header');
const headerContainer = header();
appendChildren(headerTag, headerContainer);

const main = selectElement('.main');
const { section, diagonalBackground } = about();
const projectsSection = projects();
const contactSection = contact();

appendChildren(
  main,
  section,
  diagonalBackground,
  projectsSection,
  contactSection
);
