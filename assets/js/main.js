document.addEventListener('DOMContentLoaded', function () {
  const winnerItems = document.querySelectorAll('.winner__item')
  const openButton = document.querySelector('.winner__actions-open')
  const closeButton = document.querySelector('.winner__actions-close')
  const itemsToShow = 5

  winnerItems.forEach((item, index) => {
    if (index >= itemsToShow) {
      item.classList.add('winner__item--hidden')
    }
  })

  openButton.addEventListener('click', function () {
    winnerItems.forEach((item) => {
      item.classList.remove('winner__item--hidden')
    })
  })

  closeButton.addEventListener('click', function () {
    winnerItems.forEach((item, index) => {
      if (index >= itemsToShow) {
        item.classList.add('winner__item--hidden')
      }
    })
  })

  const faqItems = document.querySelectorAll('.faq__item')

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq__item-header')
    const toggle = item.querySelector('.faq__item-toggle')
    const content = item.querySelector('.faq__item-content')

    content.style.maxHeight = '0px'

    const handleToggle = () => {
      const isOpen = item.classList.contains('faq__item--open')

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('faq__item--open')
          const otherContent = otherItem.querySelector('.faq__item-content')
          if (otherContent) {
            otherContent.style.maxHeight = '0px'
          }
        }
      })

      if (isOpen) {
        item.classList.remove('faq__item--open')
        content.style.maxHeight = '0px'
      } else {
        item.classList.add('faq__item--open')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    }

    header.addEventListener('click', handleToggle)
    toggle.addEventListener('click', (e) => {
      e.stopPropagation()
      handleToggle()
    })
  })
})
