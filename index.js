const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");


leftBtn.onclick = () => {
  document.getElementById("container").scrollLeft -= 350;
};

rightBtn.onclick = () => {
    document.getElementById("container").scrollLeft += 350;
  };