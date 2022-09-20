import AboutPage from "./components/AboutPage.js";
import HomePage from "./components/HomePage.js";
import NotFoundPage from "./components/NotFoundPage.js";
import UserPage from "./components/UserPage.js";
import { $ } from "./helper.js";
import { users } from "./data.js";
import Header from "./components/Header.js";

const route = () => {
  const nav = document.querySelector("#nav");

  nav.addEventListener("click", (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    history.pushState({}, "", e.target.href);
    handleLocation();
  });
};

const routes = {
  404: NotFoundPage,
  "/": HomePage,
  "/about": AboutPage,
  "/users": UserPage,
};

const handleLocation = async () => {
  const path = window.location.pathname;

  new Header($("#nav"), { path });

  const element = routes[path] || routes["404"];
  new element($("#main-page"), { users });
};

window.onpopstate = handleLocation;
window.onload = () => {
  handleLocation();
  route();
};
