import { useState, useEffect } from "react";
import Style from "./Feed.module.css";
import { useDispatch } from "react-redux";
import { snackbarAction } from "../../store/snackbar";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = ({ name, photoURL }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const description = [
    "Solution analyst",
    "Solution lead",
    "Fullstack developer",
    "Java developer",
    "Frontend developer",
  ];
  useEffect(() => {
    const q = query(collection(db, "post"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPost(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "post"), {
        name: name,
        description:
          description[Math.floor(Math.random() * description.length)],
        message: event.target.search.value,
        photoUrl: photoURL || "",
        created: Timestamp.now(),
      });
      event.target.search.value = "";
      dispatch(
        snackbarAction.enableSnackbar({
          status: true,
          message: "Post added successfully",
          severity: "success",
        })
      );
    } catch (err) {
      dispatch(
        snackbarAction.enableSnackbar({
          status: true,
          message: err.code.split("/")[1].replaceAll("-", " "),
          severity: "error",
        })
      );
    }
  };
  return (
    <div className={Style.feed}>
      <div className={Style.inputContainer}>
        <div className={Style.feedInput}>
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input type="search" name="search" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={Style.feedInputOptions}>
          <InputOptions Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOptions Icon={SmartDisplayIcon} color="#E7A33E" title="Video" />
          <InputOptions Icon={WorkIcon} color="#C0CBCD" title="Job" />
          <InputOptions
            Icon={ArticleIcon}
            color="#7FC15E"
            title="Write article"
          />
        </div>
      </div>
      <FlipMove>
        {post.map(({ id, data }) => {
          return (
            <Post
              key={id}
              name={data.name}
              description={data.description}
              message={data.message}
              imageUrl={data.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
