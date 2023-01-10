import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal, form;

export const showModal = () => {
  modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset();
}
/**
 * 
 * @param { HTMLDivElement } element 
 */
export const renderModal = (element) => {

  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');

  modal.addEventListener('click', (event) => {
    if (event.target.className === 'modal-container') {
      hideModal();
    };
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(from);
    const userLike = {}

    for (const [key, value] of formData) {
      if (key === 'balance') {
        userLike[key] = +value;
        continue;
      }

      if (key === 'isActive') {
        userLike[key] = (value === 'on') ? true : false;
      }

      hideModal();
    }
  });

  element.append(modal);
};