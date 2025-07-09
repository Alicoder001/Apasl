import "../sass/videoSection.scss";
import { useTranslation } from "react-i18next";

export default function VideoSection() {
  const { t } = useTranslation();
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
  ];

  return (
    <div className="videoSection" id="videos">
      <div className="videoSection_header">
        <h1>{t("videos")}</h1>
      </div>

      <div className="videoSection_content">
        {videos.map((video) => (
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
    </div>
  );
}
