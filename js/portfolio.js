// Wait for the HTML content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the container element to display images
    var imageContainer = document.getElementById("imageContainer");

    // Array of image filenames (you can fetch this dynamically from the server as well)
    var imageFilenames = ["render1.jpg", "render2.jpg"];

    // Loop through the array of image filenames
    for (var i = 0; i < imageFilenames.length; i++) {
        // Create an <img> element for each image
        var imgElement = document.createElement("img");

        // Set the src attribute to the image filename
        imgElement.src = "assets/images/" + imageFilenames[i];

        // Create a <div> element to wrap each image with a description
        var imageDiv = document.createElement("div");

        // Create a <p> element to add a description for each image
        var description = document.createElement("p");
        description.textContent = "Project Description for " + imageFilenames[i];

        // Append the image and description to the imageDiv
        imageDiv.appendChild(imgElement);
        imageDiv.appendChild(description);

        // Append the imageDiv to the main container
        imageContainer.appendChild(imageDiv);
    }
});
