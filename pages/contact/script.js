(function() {
  // Initialize EmailJS
  emailjs.init("_V7CvHr3MB1RHFen9");

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMessage");
  const errorMsg = document.getElementById("errorMessage");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    submitBtn.disabled = true;

    emailjs.sendForm("service_oedxah9", "template_svn2o6g", this)
      .then(() => {
        successMsg.style.display = "block";
        errorMsg.style.display = "none";
        form.reset();
        submitBtn.disabled = false;
      }, () => {
        successMsg.style.display = "none";
        errorMsg.style.display = "block";
        submitBtn.disabled = false;
      });
  });
})();