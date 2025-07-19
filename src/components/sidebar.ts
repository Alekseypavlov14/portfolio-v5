export function initializeSidebar() {
  const burgerButton = document.getElementById('burger-button')
  const sidebar = document.getElementById('sidebar')
  if (!burgerButton || !sidebar) return
  
  const links = Array.from(document.querySelectorAll('[data-sidebar-nav-link]'))
  
  // css classes
  const burgerButtonActiveClass = 'active'
  const sidebarOpenedClass = 'opened'
  const bodyFixedClass = 'fixed'

  // handlers
  burgerButton.addEventListener('click', toggleSidebar)

  links.forEach(link => {
    link.addEventListener('click', toggleSidebar)
  })

  // utils
  function toggleSidebar() {
    if (!burgerButton || !sidebar) return

    burgerButton.classList.toggle(burgerButtonActiveClass)
    sidebar.classList.toggle(sidebarOpenedClass)
    document.body.classList.toggle(bodyFixedClass)
  }
}
