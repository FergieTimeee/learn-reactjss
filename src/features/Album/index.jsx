import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "ReactJs",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
    },
    {
      id: 2,
      name: "NodeJS",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
    },
    {
      id: 3,
      name: "Responsive",
      thumbnailUrl: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
