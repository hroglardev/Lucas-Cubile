export const createHtmlElement = (tag, classes, text, id) => {
  const element = document.createElement(tag)

  classes && classes.forEach((className) => element.classList.add(className))
  text && (element.innerText = text)
  id && (element.id = id)

  return element
}

export const appendChildren = (parent, ...children) => children.forEach((child) => parent.appendChild(child))

export const selectElement = (selector) => document.querySelector(selector)

export const selectList = (selector) => [...document.querySelectorAll(selector)]
