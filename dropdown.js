function toggleDropper(dropperID) {
  // get already active droppers
  const active = document.getElementsByClassName("active");
  // get dropper that triggered the event, activate it
  const dropper = document.getElementById(dropperID);
  dropper.classList.toggle("active");

  // create event listeners for image children
  const dropperContent = dropper.querySelector('.dropperContent');
  const images = dropperContent.children;
  for (var i = 0; i < images.length; ++i) {
	if (dropper.classList.contains("active")) {
		images[i].setAttribute("onclick", `view(${dropperID}, ${i})`);
	} else {
		images[i].setAttribute("onclick", "")
	}
  }

  // remove all active droppers other than specified dropper
  for (let i = 0; i < active.length; ++i) {
    if (active[i] != dropper) {
      active[i].classList.remove("active");
    }
  }
}

function view(dropper, image_index) {
	var images = dropper.querySelector(".dropperContent");
	var container = document.getElementById("image_viewer");
	container.style.display = "grid";
	var image_div = document.getElementById("image_viewer_images");
	image_div.innerHTML = images.innerHTML;
	image_div.children[image_index].classList.add("viewing");
}

function quitViewer() {
	var container = document.getElementById("image_viewer");
	container.style.display = "none";
	var image_div = document.getElementById("image_viewer_images");
	image_div.innerHTML = '';
}

function viewerLeft() {
	var image_div = document.getElementById("image_viewer_images");
	var active = image_div.querySelector(".viewing");
	var images = image_div.children;
	var new_index = -1;
	for (var i = 0; i < images.length; ++i) {
		if (images[i] == active) {
			if (i == 0) {
				new_index = images.length - 1;
			} else {
				new_index = --i;
			}
			break;
		}
	}
	active.classList.toggle("viewing");
	images[new_index].classList.toggle("viewing");
	console.log("left");
}

function viewerRight() {
	var image_div = document.getElementById("image_viewer_images");
	var active = image_div.querySelector(".viewing");
	var images = image_div.children;
	var new_index = -1;
	for (var i = 0; i < images.length; ++i) {
		if (images[i] == active) {
			if (i == images.length - 1) {
				new_index = 0;
			} else {
				new_index = ++i;
			}
			break;
		}
	}
	active.classList.toggle("viewing");
	images[new_index].classList.toggle("viewing");
	console.log("right");
}
