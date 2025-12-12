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
})
