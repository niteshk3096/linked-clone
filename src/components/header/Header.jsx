import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Style from "./Header.module.css";
import HeaderOptions from "./HeaderOption";
const Header = ({ name, photoURL }) => {
  const userDetails = {
    image: photoURL,
    name: name,
  };
  return (
    <div className={Style.header}>
      <div className={Style.leftHeader}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="Linked Icon"
        />
        <div className={Style.searchContainer}>
          <SearchIcon />
          <input type={"search"} />
        </div>
      </div>
      <div className={Style.rightHeader}>
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={ForumRoundedIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOptions user={userDetails} title={name} />
      </div>
    </div>
  );
};

export default Header;
