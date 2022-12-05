import Style from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const HeaderOptions = ({ user, Icon, title }) => {
  return (
    <div className={Style.headerOption}>
      {Icon && <Icon className={Style.headerOptionIcon} />}
      {user && (
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src={user.image}
        >
          {user.name.substring(0, 1).toUpperCase()}
        </Avatar>
      )}
      <h3 className={Style.headerOptionTitle}>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
