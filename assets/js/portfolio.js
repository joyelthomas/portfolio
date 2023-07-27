document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");

    // Fetch image names using GitHub API
    fetch("https://api.github.com/repos/your-username/your-repository/contents/assets/images")
        .then(response => response.json())
        .then(data => {
            var imageFilenames = data
                .filter(file => file.type === "file")
                .map(file => file.name)
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

