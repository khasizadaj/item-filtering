function cl(logged) {
  console.log(logged);
}

const searchForm = document.forms["search-bar"].querySelector(".search");
const items = document.querySelectorAll(".list-group-item");

searchForm.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  items.forEach((item) => {
    const title = item.lastElementChild.innerText.slice(3).toLowerCase();
    if (title.indexOf(term) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});

const priceForm = document.forms["search-bar"].querySelector(".price");
priceForm.addEventListener("keyup", (e) => {
  const filterPrice = e.target.value;

  items.forEach((item) => {
    const bookPrice = parseInt(item.querySelector(".price").innerText.slice(1));
    if (filterPrice >= bookPrice) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});

const radios = document.forms["search-bar"].elements["radio"];

radios.forEach((radioButton) => {
  const radioButtonVal = radioButton.value;

  radioButton.addEventListener("change", function () {
    items.forEach((item) => {
      if (item.classList.contains(radioButtonVal)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
