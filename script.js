const btnShowModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnShowModal.forEach((btn) => btn.addEventListener('click', openModal))

overlay.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModal)
