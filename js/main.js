window.onload = () => {
// Selectors
const addBtn = document.querySelector('.add-btn');
const modalBg = document.querySelector('.modal-bg');
const continueBtn = document.querySelector('.continue-btn');
const jobContainer = document.querySelector('.job-container');
let form = document.querySelector('.job-form');
let deleteBtn = document.querySelector('.job-container');

// Event Listeners
addBtn.addEventListener('click', jobModal);
continueBtn.addEventListener('click', addJob);
deleteBtn.addEventListener('click', deleteCard);

// Functions
function jobModal() {
   modalBg.classList.add('bg-active');
}

function addJob(event) {
   event.preventDefault();
   // Creating card
   const card = document.createElement('div');
   card.classList.add('card');
   // Company name
   const companyName = document.createElement('span');
   companyName.classList.add('company-name');
   console.log(form.elements[0].value);
   companyName.innerText = form.elements[0].value;
   // Job title
   const jobTitle = document.createElement('h4');
   jobTitle.classList.add('job-title');
   console.log(form.elements[1].value);
   jobTitle.innerText = form.elements[1].value;
   // Company logo
   const companyLogo = document.createElement('i');
   companyLogo.classList.add('fab', `fa-${form.elements[0].value.toLowerCase()}`, 'company-logo');
   // Deelte button
   const deleteButton = document.createElement('i');
   deleteButton.classList.add('far', 'fa-trash-alt', 'delete-card');
   // Appending newly created elements
   card.appendChild(companyLogo);
   card.appendChild(companyName);
   card.appendChild(jobTitle);
   card.appendChild(deleteButton);
   jobContainer.appendChild(card);
   // Closing modal
   modalBg.classList.remove('bg-active');
   // Clearing form
   form.elements[0].value = '';
   form.elements[1].value = '';
}

function deleteCard(e) {
   let item = e.target;
   console.log(e.target);
   if(item.classList[0] === 'far') {
      let removeCard = item.parentElement;
      removeCard.remove();
   }
}
}
