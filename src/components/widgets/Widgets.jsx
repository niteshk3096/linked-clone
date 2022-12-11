import React from "react";
import Style from "./Widgets.module.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const articles = [
    { id: 1, heading: "Cornona Update", subtitle: "Top news - 9099 readers" },
    { id: 2, heading: "Is Redux good?", subtitle: "Top news - 7019 readers" },
    {
      id: 3,
      heading: "Next Js is better",
      subtitle: "Top news - 10087 readers",
    },
    { id: 4, heading: "UN report on war", subtitle: "Top news - 8767 readers" },
    {
      id: 5,
      heading: "React 18 release",
      subtitle: "Top news - 870923 readers",
    },
  ];
  const NewsArticle = ({ heading, subtitle }) => {
    return (
      <div className={Style.widgetArticle}>
        <div className={Style.widgetArticleLeft}>
          <FiberManualRecordIcon />
        </div>
        <div className={Style.widgetArticleRight}>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={Style.widgets}>
      <div className={Style.widgetHeader}>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {articles.map(({ id, heading, subtitle }) => {
        return <NewsArticle key={id} heading={heading} subtitle={subtitle} />;
      })}
    </div>
  );
}

export default Widgets;
