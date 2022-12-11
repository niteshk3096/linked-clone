import { forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import Style from "./Feed.module.css";
import InputOptions from "./InputOptions";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { deepOrange } from "@mui/material/colors";
const Post = forwardRef(({ name, description, message, imageUrl }, ref) => {
  return (
    <div ref={ref} className={Style.post}>
      <div className={Style.postHeader}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt={name}
          src={imageUrl}
          className={Style.sidebarAvatar}
        >
          {name.substring(0, 1).toUpperCase()}
        </Avatar>
        <div className={Style.postInfo}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={Style.postBody}>
        <p>{message}</p>
      </div>
      <div className={Style.postButtons}>
        <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color="grey" />
        <InputOptions
          Icon={ChatBubbleOutlineOutlinedIcon}
          title="Comment"
          color="grey"
        />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="grey" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
