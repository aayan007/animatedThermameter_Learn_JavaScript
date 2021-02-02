const tempload = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "#f8b627";
  }, 1000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "#d63031";
  }, 4000);
};

tempload();

setInterval(tempload, 5000);
