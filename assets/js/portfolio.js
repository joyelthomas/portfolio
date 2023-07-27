document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");

    // Fetch image names using Fetch API
    fetch("assets/images/")
        .then(response => response.text())
        .then(text => {
            // Parse the directory listing (Note: this may not work for all browsers)
            var imageFilenames = text
                .split("\n")
                .filter(filename => filename.trim() !== "")
                .filter(filename => /\.(jpg|jpeg|png|gif)$/i.test(filename));

            // Generate HTML for each image
            imageFilenames.forEach(filename => {
                var imgElement = document.createElement("img");
                imgElement.src = "assets/images/" + filename;

                var imageDiv = document.createElement("div");

                var description = document.createElement("p");
                description.textContent = "Project Description for " + filename;

                imageDiv.appendChild(imgElement);
                imageDiv.appendChild(description);

                imageContainer.appendChild(imageDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching image names:", error);
        });
});
