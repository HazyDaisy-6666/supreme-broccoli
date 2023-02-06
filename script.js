function toggleNav() {
    const outerGrid = document.querySelector('.outer-grid');
    outerGrid.classList.toggle('outer-grid-expand');
    
    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
    }

    function toggleForm() {
        const loginForm = document.querySelector('.form-popup');
        loginForm.classList.toggle('.form-reveal');
      }
      
      