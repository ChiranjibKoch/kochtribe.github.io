// JavaScript to include header, footer, and navigation
fetch('includes/header.html')
  .then(response => response.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch('includes/footer.html')
  .then(response => response.text())
  .then(data => document.getElementById("footer").innerHTML = data);

fetch('includes/navigation.html')
  .then(response => response.text())
  .then(data => document.getElementById("navigation").innerHTML = data);
