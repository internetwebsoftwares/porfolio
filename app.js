const desktopNav = document.querySelector(".desktopNav");
const nav = document.querySelector(".appNav");
const openNavBtn = document.querySelector("#openNavBtn");
const closeNavBtn = document.querySelector("#closeNavBtn");

function openNav() {
  nav.style.opacity = "1";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "block";
}

function closeNav() {
  nav.style.opacity = "0";
  closeNavBtn.style.display = "none";
  openNavBtn.style.display = "block";
}

[...desktopNav.children].forEach((nav) =>
  nav.addEventListener("click", activateNavLink)
);

function activateNavLink(e) {
  [...desktopNav.children].forEach((nav) =>
    nav.classList.remove("activeNavLink")
  );
  e.target.classList.add("activeNavLink");
}
