import s from "./Navbar.module.css";

const ActiveLinks = () => {
  return (select) => (select.isActive ? s.activeLink : s.link);
};

export default ActiveLinks;
