function checkRace() {
  const height = document.getElementById("height").value;

  if (!height) {
    alert("Please enter your height!");
  } else if (height < 130) {
    alert("You might be a Hobbit! 🍃");
  } else if (height >= 130 && height <= 180) {
    alert("You could be a brave Human of Middle-earth!");
  } else {
    alert("You're tall like an Elf! 🧝‍♂️");
  }
}

