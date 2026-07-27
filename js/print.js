document.addEventListener('DOMContentLoaded', function() {
  const printBtn = document.getElementById('print-cv-btn');
  const resetBtn = document.getElementById('reset-checkboxes-btn');
  const checkboxes = {
    competencies: document.getElementById('include-competencies'),
    experience: document.getElementById('include-experience'),
    education: document.getElementById('include-education'),
    contact: document.getElementById('include-contact')
  };
  
  // Funktion til at opdatere body classes
  function updateBodyClasses() {
    document.body.classList.remove(
      'print-competencies',
      'print-experience',
      'print-education'
    );
    
    if (checkboxes.competencies.checked) {
      document.body.classList.add('print-competencies');
    }
    if (checkboxes.experience.checked) {
      document.body.classList.add('print-experience');
    }
    if (checkboxes.education.checked) {
      document.body.classList.add('print-education');
    }
  }
  
  // Funktion til at tilføje class til hver section
  function addSectionClasses() {
    const competenciesPage = document.querySelector('main > section');
    const experiencePage = document.querySelector('experience.html main > section');
    const educationPage = document.querySelector('education.html main > section');
    
    // Tilføj class til hver section på denne side
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      if (section.querySelector('h2')) {
        const heading = section.querySelector('h2').textContent.toLowerCase();
        if (heading.includes('kompetence')) {
          section.classList.add('section-competencies');
        } else if (heading.includes('erfaring') || heading.includes('meras') || heading.includes('wolt')) {
          section.classList.add('section-experience');
        } else if (heading.includes('uddannelse') || heading.includes('kurser') || heading.includes('ucl') || heading.includes('sdu')) {
          section.classList.add('section-education');
        }
      }
    });
  }
  
  // Event listeners for checkboxes
  Object.values(checkboxes).forEach(checkbox => {
    if (checkbox && !checkbox.disabled) {
      checkbox.addEventListener('change', updateBodyClasses);
    }
  });
  
  // Print knap
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      updateBodyClasses();
      window.print();
    });
  }
  
  // Nulstil knap
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      Object.values(checkboxes).forEach(checkbox => {
        if (checkbox && !checkbox.disabled) {
          checkbox.checked = true;
        }
      });
      updateBodyClasses();
    });
  }
  
  // Initialiser
  updateBodyClasses();
  addSectionClasses();
});