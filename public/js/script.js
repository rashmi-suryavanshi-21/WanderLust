// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
    document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("searchBtn");

  if (!btn) return; // if button not found, stop

  btn.addEventListener("click", () => {
    const input = document.getElementById("searchInput")?.value.toLowerCase() || "";
    const listings = document.querySelectorAll(".listing-item");

    listings.forEach((listing) => {
      const title = listing.querySelector(".listing-title")?.innerText.toLowerCase() || "";
      const location = listing.querySelector(".listing-location")?.innerText.toLowerCase() || "";

      if (title.includes(input) || location.includes(input)) {
        listing.style.display = "block";
      } else {
        listing.style.display = "none";
      }
    });
  });
});
  })()