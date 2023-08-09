// const modal = document.getElementById("signatureModal");
// const canvas = document.getElementById("signatureCanvas");
// const context = canvas.getContext("2d");
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// // Event listeners to capture signature input
// canvas.addEventListener("mousedown", (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (!isDrawing) return;
//   drawSignature(e.offsetX, e.offsetY);
// });

// canvas.addEventListener("mouseup", () => {
//   isDrawing = false;
// });

// canvas.addEventListener("mouseout", () => {
//   isDrawing = false;
// });

// function drawSignature(x, y) {
//   context.beginPath();
//   context.moveTo(lastX, lastY);
//   context.lineTo(x, y);
//   context.strokeStyle = "black";
//   context.lineWidth = 2;
//   context.stroke();
//   [lastX, lastY] = [x, y];
// }


// function clearSignature() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     document.getElementById('signaturePreview').innerText = '';
// }

// // Function to open the modal
// function openModal() {
//   modal.style.display = "block";
//   clearSignature();
// }

// // Function to close the modal
// function close() {
//   modal.style.display = "none";
// }

// function saveSignature( {
//   const dataURL = canvas.toDataURL(); // Save the signature as a base64-encoded PNG image
//   const img = new Image();
//   img.src = dataURL;

//   // Set the image's CSS styles for width and height
//   img.style.maxWidth = "100px";
//   img.style.maxHeight = "40px";
//   img.style.width = "auto"; // Let the width scale down proportionally
//   img.style.height = "auto"; // Let the height scale down proportionally
//   img.style.objectFit = "contain"; // Maintain aspect ratio

//   // Wrap the image inside a container div
//   const signatureContainer = document.getElementById("signaturePreview");
//   signatureContainer.innerHTML = ""; // Clear existing content
//   signatureContainer.appendChild(img);

//   // Add a signature text with increased font size and bold
//   const signatureText = document.createElement("div");
//   signatureText.innerText = "Your Signature";
//   signatureText.style.fontSize = "16px"; // Set the desired font size
//   signatureText.style.fontWeight = "bold"; // Make the text bold
//   signatureText.style.textUnderlineOffset = "true";
//   signatureContainer.appendChild(signatureText);


//   close();

// }



//================= Search Box =======================//
//====================================================//
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let rows = document.getElementById("dataTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  
    for (let row of rows) {
      let rowData = row.textContent.toLowerCase();
      if (rowData.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
  
