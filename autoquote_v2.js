class Framing {
  Framing(name) {
    let framingCosts = {
      "Closeup": 20,
      "Headshot": 30,
      "Bust": 35,
      "Halfbody": 40,
      "Thighup": 45,
      "Fullbody": 50,
      "Scenic": 50,
    }
    this.cost = framingCosts[name];
    this.name = name;
  }
}

class Addon {
  Addon(name) {
    let addonsCosts = {
      props: 5,      // per character (first 3 are free)
      cleanup: 10,   // per character
      shading: 10,   // per character
      noColor: 8,    // per character (subtract this value, don't add)
    }
  }
}

class Background {
  Background(name) {
    let backgroundCosts = {
      "None": 0,
      "Abstract": 6,
      "Simple Scene": 15,
      "Complex Scene": 30
    }
  }
}

document.getElementById("autoquote_form").addEventListener("submit", function(e) {
  e.preventDefault(); // keep browser from reloading on submit
  var formData = new FormData(e.target);
});
