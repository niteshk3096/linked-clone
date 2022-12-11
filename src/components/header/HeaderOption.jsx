import Style from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const HeaderOptions = ({ user, Icon, title }) => {
  const dispatch = useDispatch();
  const logout = async () => {
    await signOut(auth);
    dispatch(userAction.logout());
  };
  return (
    <div className={Style.headerOption}>
      {Icon && <Icon className={Style.headerOptionIcon} />}
      {user && (
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt={title}
          src={user.image}
          onClick={logout}
        >
          {user.name.substring(0, 1).toUpperCase()}
        </Avatar>
      )}
      <h3 className={Style.headerOptionTitle}>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
