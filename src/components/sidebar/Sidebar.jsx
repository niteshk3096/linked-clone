import Style from "./Sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const Sidebar = ({ name, email, photoURL }) => {
  const recent = ["ReactJs", "React Native", "JS", "HTML", "CSS"];
  const recentItems = (item, index) => {
    return (
      <div className={Style.sidebarRecentItems} key={index}>
        <span className={Style.sidebarHash}>#</span>
        <p>{item}</p>
      </div>
    );
  };
  return (
    <div className={Style.sidebar}>
      <div className={Style.sidebarTop}>
        <img src="https://images.unsplash.com/photo-1670148570351-601dd7bebcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80" />
        {/* <Avatar /> */}
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt={name}
          src={photoURL}
          className={Style.sidebarAvatar}
        >
          {name.substring(0, 1).toUpperCase()}
        </Avatar>
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className={Style.sidebarStats}>
        <div className={Style.sidebarStat}>
          <p>Who viewed you</p>
          <p className={Style.sidebardStatNumber}>2,878</p>
        </div>
        <div className={Style.sidebarStat}>
          <p>Views on post</p>
          <p className={Style.sidebardStatNumber}>2,478</p>
        </div>
      </div>
      <div className={Style.sidebarBottom}>
        <p>Recent</p>
        {recent.map((item, index) => {
          return recentItems(item, index);
        })}
      </div>
    </div>
  );
};

export default Sidebar;
