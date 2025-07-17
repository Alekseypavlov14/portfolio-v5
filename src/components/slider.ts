// selectors
const sliderSelector = '[data-slider]'
const sliderSlidesContainerSelector = '[data-slider-slides]'
const sliderSlidesSelector = '[data-slider-slide]'
const sliderLinksSelector = '[data-slider-link]'
const sliderImageSelector = '[data-slider-image]'

// css modifiers
const sliderSlideActiveCSSClass = 'slider-slide--active'
const sliderLinkActiveCSSClass = 'slider__link--active'
const galleryImageActiveCSSClass = 'gallery__image--active'
const galleryImagePreviousCSSClass = 'gallery__image--previous'
const galleryImageNextCSSClass = 'gallery__image--next'

// interval 
const slideChangeInterval = 5000

export function initializeSlider() {
  const sliders = Array.from(document.querySelectorAll(sliderSelector))

  sliders.forEach(slider => {
    const slidesContainer = slider.querySelector(sliderSlidesContainerSelector) as HTMLElement
    if (!slidesContainer) return

    const slides = Array.from(slider.querySelectorAll(sliderSlidesSelector))
    const links = Array.from(slider.querySelectorAll(sliderLinksSelector))
    const images = Array.from(slider.querySelectorAll(sliderImageSelector))
    if (!slides.length || !links.length || !images.length) return

    let index = 0
    let automaticSlideChangeInterval = 0

    // automatic animation interval
    automaticSlideChangeInterval = initializeAutomaticAnimation()
    let isAutomaticIntervalActive = true

    // handle window blurs and focuses
    window.addEventListener('focus', () => {
      if (!isAutomaticIntervalActive) return
      automaticSlideChangeInterval = initializeAutomaticAnimation()
    })
    window.addEventListener('blur', () => {
      clearInterval(automaticSlideChangeInterval)
    })

    // handlers
    links.forEach((link, index) => {
      link.addEventListener('click', () => {
        clearInterval(automaticSlideChangeInterval)
        isAutomaticIntervalActive = false

        updateActiveSlide(index)
      })
    })
    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        clearInterval(automaticSlideChangeInterval)
        isAutomaticIntervalActive = false

        updateActiveSlide(index)
      })
    })

    // handler callbacks
    function initializeAutomaticAnimation() {
      if (automaticSlideChangeInterval) clearInterval(automaticSlideChangeInterval)

      return setInterval(() => {
        index = getNextIndex(index, slides.length)
        updateActiveSlide(index)
      }, slideChangeInterval)
    }
    function updateActiveSlide(index: number) {
      // update slider nav links
      links.forEach(link => link.classList.remove(sliderLinkActiveCSSClass))
      links[index].classList.add(sliderLinkActiveCSSClass)

      // update images
      images.forEach(image => image.classList.remove(galleryImageActiveCSSClass, galleryImagePreviousCSSClass, galleryImageNextCSSClass))
      
      images[index].classList.add(galleryImageActiveCSSClass)
      images[getPreviousIndex(index, slides.length)].classList.add(galleryImagePreviousCSSClass)
      images[getNextIndex(index, slides.length)].classList.add(galleryImageNextCSSClass)

      // update slides container
      slidesContainer.style.setProperty('--index', String(index))

      // update slides
      slides.forEach(slide => slide.classList.remove(sliderSlideActiveCSSClass))
      slides[index].classList.add(sliderSlideActiveCSSClass)
    } 
  })

  // utils
  function getPreviousIndex(currentIndex: number, slidesAmount: number) {
    return (slidesAmount + currentIndex - 1) % slidesAmount
  }
  function getNextIndex(currentIndex: number, slidesAmount: number) {
    return (slidesAmount + currentIndex + 1) % slidesAmount
  }
}