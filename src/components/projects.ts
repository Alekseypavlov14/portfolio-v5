import type { Project } from '../entities/project'
import { getProjects } from '../queries/projects'
import { formatDate } from '../utils/date'

export function displayProjects() {
  const projectsGrid = document.getElementById('projects-grid')
  if (!projectsGrid) return

  projectsGrid.innerHTML = renderProjectCards()
}

function renderProjectCards() {
  const projects = getProjects()
  const cards = projects.map(renderProjectCard)
  return cards.join('')
}

function renderProjectCard(project: Project) {
  const link = project.link ? `
    <a href="${project.link}" class="project-card__link">
      <img src="./img/icons/web.svg" alt="">
    </a>
  ` : ''

  const repository = project.repository ? `
    <a href="${project.repository}" class="project-card__link">
      <img src="./img/icons/github.svg" alt="">
    </a>
  ` : ''

  return `
    <div class="project-card">
      <div class="project-card__image">
        <img src="${project.imageSource}" alt="">
        <div class="project-card__shadow"></div>
      </div>
      <div class="project-card__body">
        <div class="project-card__title">${project.name}</div>
        <div class="project-card__text">
          ${project.description}
        </div>

        <div class="project-card__footer">
          <div class="project-card__links">
            ${link}
            ${repository}
          </div>

          <div class="project-card__date">${formatDate(project.date)}</div>
        </div>
      </div>
    </div>
  `
}
