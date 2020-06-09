window.onload = () => {
// Selectors
const addBtn = document.querySelector('.add-btn');
const modalBg = document.querySelector('.modal-bg');
const continueBtn = document.querySelector('.continue-btn');
const jobContainer = document.querySelector('.job-container');
let form = document.querySelector('.job-form');

// Event Listeners
addBtn.addEventListener('click', jobModal);
continueBtn.addEventListener('click', addJob);

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
   // Appending newly created elements
   card.appendChild(companyLogo);
   card.appendChild(companyName);
   card.appendChild(jobTitle);
   jobContainer.appendChild(card);
   // Closing modal
   modalBg.classList.remove('bg-active');
   // Clearing form
   form.elements[0].value = '';
   form.elements[0].value = '';
}
}
