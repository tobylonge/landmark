document.addEventListener("DOMContentLoaded", () => {
  console.log("I got here:::");

  //nav toggle
  document.querySelector(".hfe-nav-menu-icon").addEventListener("click", () => {
    console.log("menu clicked:::");
    document.querySelector(".menu-nav").classList.remove("hidden");
  });

  document.querySelector(".menu-nav").addEventListener("click", () => {
    document.querySelector(".menu-nav").classList.add("hidden");
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".menu-nav").classList.add("hidden");
  });

  let menus = document.querySelectorAll(".menu-item a");
  console.log(menus);
  menus.forEach((el) => {
    console.log("el ", el);
    el.addEventListener("click", (e) => {
      console.log("open here::: ", el, el.nextElementSibling);
      if (el.nextElementSibling) {
        e.preventDefault();
        e.stopPropagation();
        if (el.nextElementSibling.classList.contains("hidden")) {
          el.nextElementSibling.classList.remove("hidden");
          el.querySelector(".fa-caret-down").classList.add(
            "transform",
            "rotate-180"
          );
        } else {
          el.nextElementSibling.classList.add("hidden");
          el.querySelector(".fa-caret-down").classList.remove(
            "transform",
            "rotate-180"
          );
        }
      } else {
        return true;
      }
      // document
      //   .querySelector(".menu-item a + .dropdown-menu")
      //   .classList.add("block");
    });
  });
});
