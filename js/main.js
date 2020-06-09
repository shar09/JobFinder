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
   // Appending newly created elements
   jobContainer.appendChild(companyName);
   jobContainer.appendChild(jobTitle);
}
}
