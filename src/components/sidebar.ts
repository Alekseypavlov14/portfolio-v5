export function initializeSidebarNavLinks() {
  const sidebar = document.getElementById('sidebar')
  const sidebarOpenedClass = 'opened'
  if (!sidebar) return
  
  const links = Array.from(document.querySelectorAll('[data-sidebar-nav-link]'))

  const bodyFixedClass = 'fixed'

  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove(sidebarOpenedClass)
      document.body.classList.remove(bodyFixedClass)
    })
  })
}
