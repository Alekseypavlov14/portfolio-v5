export function initializeBurgerButton() {
  const burgerButton = document.getElementById('burger-button')
  const burgerButtonActiveClass = 'active'

  const sidebar = document.getElementById('sidebar')
  const sidebarOpenedClass = 'opened'

  const bodyFixedClass = 'fixed'

  if (!burgerButton || !sidebar) return

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle(burgerButtonActiveClass)
    sidebar.classList.toggle(sidebarOpenedClass)
    document.body.classList.toggle(bodyFixedClass)
  })
}
