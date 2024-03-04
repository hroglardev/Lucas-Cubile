'use strict'

import './styles/globals.scss'
import { header } from './components/header/header'
import { appendChildren, selectElement } from './helpers/htmlElements'

const headerTag = selectElement('.header')
const headerContainer = header()

appendChildren(headerTag, headerContainer)
