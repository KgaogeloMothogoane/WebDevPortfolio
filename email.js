function sendMail(params) {
  var templateParams = {
    userName: document.getElementsByName("userName").value,
    userNumber: document.getElementsByName("userNumber").value,
    userEmail: document.getElementsByName("userEmail").value,
    userMessage: document.getElementsByName("userMessage").value,
  };

  const btn = document.getElementById("button");
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending..."; 

    const serviceID = "default_service";
    const templateID = "template_4ti5qmm";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
}
