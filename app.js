function addProjects() {
	var projectDiv = document.getElementById("ourProjects"); //the hash
	for (var i =0; i < 4; i++) {
		var project = document.createElement("div");
		var projectLink = document.createElement("a");
		var projectImage = document.createElement("project0.png");
		projectLink.setAttribute("href", "http://www.zombo.com");
		projectImage.setAttribute("src", "project"+i+".png"); //the I
		projectLink.appendChild(projectImage);
		project.appendChild(projectLink);
		projectDiv.appendChild(project);

	}
}