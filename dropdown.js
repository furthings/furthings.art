function toggleDropper(dropperID) {
  // get already active droppers
  active = document.getElementsByClassName("active");
  // get dropper that triggered the event, activate it
  dropper = document.getElementById(dropperID);
  dropper.classList.toggle("active");

  // remove all active droppers other than specified dropper
  for (let i = 0; i < active.length; ++i) {
    if (active[i] != dropper) {
      active[i].classList.remove("active");
    }
  }
}
