import "../sass/videoSection.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function VideoSection() {
  const { t } = useTranslation();
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videos = [
    {
      id: 1,
      embedId: "IEeiGq1FGgc",
    },
    {
      id: 2,
      embedId: "FuuWisRUNb8",
    },
    {
      id: 3,
      embedId: "L5g0oyhMnxA",
    },
    {
      id: 4,
      embedId: "SSO_LW8G8Xg",
    },
    {
      id: 5,
      embedId: "Itxv7KfyT6Y",
    },
    {
      id: 6,
      embedId: "-FazlJoT_3o",
    },
    {
      id: 7,
      embedId: "O3MVX91SIwA",
    },
    {
      id: 8,
      embedId: "INkxrFNr7YQ",
    },
    {
      id: 9,
      embedId: "IwIr14fOu50",
    },
    {
      id: 10,
      embedId: "9Ia8kwBmiH8",
    },
    {
      id: 11,
      embedId: "M4dKj37U-oU",
    },
    {
      id: 12,
      embedId: "nJ8MxYI7S-E",
    },
    {
      id: 13,
      embedId: "w36evwJ21_Y",
    },
    {
      id: 14,
      embedId: "dn1Mhfs2vGA",
    },
    {
      id: 15,
      embedId: "a422d50lpnQ",
    },
    {
      id: 16,
      embedId: "7wFWTL0394I",
    },
  ];

  // Show first 6 videos initially, all videos when showAllVideos is true
  const videosToShow = showAllVideos ? videos : videos.slice(0, 6);

  const handleToggleVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  return (
    <div className="videoSection" id="videos">
      <div className="videoSection_header">
        <h1>{t("videos")}</h1>
      </div>

      <div className="videoSection_content">
        {videosToShow.map((video) => (
          <div key={video.id} className="videoSection_card">
            <div className="videoSection_video">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={`Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {videos.length > 6 && (
        <div className="videoSection_toggle">
          <button
            onClick={handleToggleVideos}
            className="toggle_button bg-primary text-white"
          >
            {showAllVideos ? t("showLess") : t("showMore")}
          </button>
        </div>
      )}
    </div>
  );
}
