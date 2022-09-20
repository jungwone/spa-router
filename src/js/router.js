const route = () => {
  const nav = document.querySelector("#nav");

  nav.addEventListener("click", (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    history.pushState({}, "", e.target.href);
    handleLocation();
  });
};

const routes = {
  404: "/src/pages/404.html",
  "/": "/src/pages/index.html",
  "/about": "/src/pages/about.html",
  "/users": "/src/pages/users.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.onload = () => {
  // handleLocation();
  // route();
};
