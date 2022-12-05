import Avatar from "@mui/material/Avatar";
import Style from "./Feed.module.css";
import InputOptions from "./InputOptions";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const Post = ({ name, description, message, imageUrl }) => {
  return (
    <div className={Style.post}>
      <div className={Style.postHeader}>
        <Avatar />
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
};

export default Post;
