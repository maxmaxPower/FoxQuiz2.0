import FavoriteFriends from "./FavoriteFriends";
import Links from "./Links";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  let navLinks = props.navObjects.map((na) => (
    <Links link={na.link} key={na.id} name={na.name} />
  ));
  let favorite = props.bestFriends.map((fr) => (
    <FavoriteFriends avatar={fr.avatar} key={fr.id} nick={fr.nick} />
  ));

  return (
    <nav className={styles.nav}>
      {navLinks}
      {favorite}
      <button
        className={
          props.themeColor ? styles.blackBtnColor : styles.whiteBtnColor
        }
        onClick={() => {
          props.setThemeColor(!props.themeColor);
        }}
      >
        ThemeColor
      </button>
    </nav>
  );
};

export default Navbar;
