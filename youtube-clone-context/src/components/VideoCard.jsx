import { useState } from "react";
import millify from "millify";
const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="cursor-pointer">
      {/* resim alanı */}
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[0].url
          }
          alt=""
        />
      </div>

      {/* video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 rounded-full "
          src={video.channelThumbnail && video.channelThumbnail[0].url}
          alt="logo"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span>Görüntülenme</span>
            </p>
            |<p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
