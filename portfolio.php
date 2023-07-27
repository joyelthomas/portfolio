<?php
$imageDir = 'assets/images/';
$imageFilenames = array_diff(scandir($imageDir), array('..', '.'));

foreach ($imageFilenames as $filename) {
    // Create an <img> element for each image
    echo '<div class="project">';
    echo '<img src="' . $imageDir . $filename . '" alt="' . $filename . '">';
    echo '<p>Project Description for ' . $filename . '</p>';
    echo '</div>';
}
?>
