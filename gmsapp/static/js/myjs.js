//======================== TAB FORMS =================================//
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }






   // JavaScript to handle the dropdown functionality
   const input = document.getElementById("myDropdown");
   const list = document.getElementById("myDropdownList");
   const items = list.getElementsByClassName("dropdown-item");

   // Function to show/hide the dropdown list
   function toggleDropdown() {
     list.style.display = list.style.display === "block" ? "none" : "block";
   }

   // Function to select an item from the dropdown
   function selectItem(item) {
     input.value = item.textContent;
     toggleDropdown();
   }

   // Event listener for clicking on the input box
   input.addEventListener("click", toggleDropdown);

   // Event listener for clicking outside the dropdown to close it
   document.addEventListener("click", function (event) {
     if (!input.contains(event.target) && !list.contains(event.target)) {
       list.style.display = "none";
     }
   });

   // Event listeners for selecting an item from the list
   for (let i = 0; i < items.length; i++) {
     items[i].addEventListener("click", function () {
       selectItem(items[i]);
     });
   }




   //================ User Profile Picture ================//
   //======================================================//

   function FileUploaded(event) {
    var image =  URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById('user_profile_image');
    var newimage = document.createElement('img');
    newimage.src = image;
    imagediv.appendChild(newimage);
   }







   document.getElementById('imageInput').addEventListener('change', handleFileSelect);

   function handleFileSelect(event) {
     const files = event.target.files;
     const imageContainer = document.getElementById('imageContainer');

     // Clear the container before displaying new images
     imageContainer.innerHTML = '';

     for (let i = 0; i < files.length; i++) {
       const file = files[i];

       // Check if the selected file is an image
       if (!file.type.startsWith('image/')) {
         console.warn('File is not an image:', file.name);
         continue;
       }

       const imageElement = document.createElement('img');
       imageElement.classList.add('uploaded-image');

       // Create a FileReader to read the image file
       const reader = new FileReader();
       reader.onload = (function(image) {
         return function(e) {
           image.src = e.target.result;
         };
       })(imageElement);

       // Read the image file as a data URL
       reader.readAsDataURL(file);

       // Append the image to the container
       imageContainer.appendChild(imageElement);
     }
   }