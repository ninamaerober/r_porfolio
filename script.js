const products = [
  { id: 1, name: "Laptop", price: 1500, stock: 5 },
  { id: 2, name: "Headphones", price: 100, stock: 10 },
  { id: 3, name: "Keyboard", price: 50, stock: 20 },
];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product && product.stock > 0) {
    product.stock--;
    displayNotification(`${product.name} added to cart successfully.`);
    document.getElementById(
      `stock${productId}`
    ).textContent = `In Stock: ${product.stock}`;
  } else {
    alert(`Sorry, ${product ? product.name : " "} is out of stock.`);
  }
}

function displayNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.remove("d-none");
  setTimeout(() => {
    notification.classList.add("d-none");
  }, 3000);
}

// Initialize EmailJS with your user ID
(function () {
  emailjs.init("thXhf5v7HsgfdkmKV");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Send the email using the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.sendForm("service_x5d0w3l", "template_6bubezp", this).then(
      function () {
        alert("Message Sent Successfully!");
      },

      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });