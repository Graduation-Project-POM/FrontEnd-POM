import React from "react";
import { Box, Typography, Card, CardContent, Stack, IconButton, Avatar } from "@mui/material";
import { PlayArrow, Videocam, LocalOffer, VideoLibrary as VideoLibraryIcon, Schedule, OndemandVideo, Launch } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { avatar, card, heroBox, heroStack, heroSubtitle, heroTitle, listWrapper, page, statsStack } from "./playlist";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  link: string;
  videoCount: number;
  duration: string;
  iconColor: string;
  icon: React.ReactNode;
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function VideoLibrarySection() {
  const { t } = useTranslation();

  const videoItems: VideoItem[] = [
    {
      id: "1",
      title: t("playlist.heroTitle"),
      description: t("playlist.heroDesc"),
      link: "https://www.youtube.com/watch?v=NV_YIWpNajs&list=PL9EgwsgADtexVP_Fj3WrmpgNtXlv0-fgl",
      videoCount: 13,
      duration: "8h 4m",
      iconColor: "#A8306B",
      icon: <PlayArrow />,
    },
    {
      id: "2",
      title: t("playlist.heroTitle"),
      description: t("playlist.heroDesc2"),
      link: "https://www.youtube.com/watch?v=HPILHO7NzcY&list=PL9EgwsgADteyGLxBjUNBL2GtWUXWM-dga",
      videoCount: 7,
      duration: "7h 3m",
      iconColor: "#FF7B72",
      icon: <Videocam />,
    },
    {
      id: "3",
      title: t("playlist.heroTitle"),
      description: t("playlist.heroDesc3"),
      link: "https://www.youtube.com/watch?v=5mE7J7Vd1U0&list=PL9EgwsgADteyL3CsO5TDeay_4ntBPFc46",
      videoCount: 25,
      duration: "49h 10m",
      iconColor: "#FFA500",
      icon: <LocalOffer />,
    },
  ];

  return (
    <Box sx={page}>
      {/* Hero Section */}
      <Box sx={heroBox}>
        <Stack direction="row" alignItems="center" spacing={2} sx={heroStack}>
          <Avatar sx={{ bgcolor: "#E91E63", width: 40, height: 40 }}>
            <VideoLibraryIcon />
          </Avatar>
          <Typography variant="h5" fontWeight={700}>
            Video Library
          </Typography>
        </Stack>

        <Typography variant="h2" sx={heroTitle}>
          Start Learning Today
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={heroSubtitle}>
          Explore our curated playlists designed to accelerate your learning journey
        </Typography>
      </Box>

      {/* Compact List View */}
      <Box sx={listWrapper}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          Compact List View
        </Typography>

        <Stack spacing={2}>
          {videoItems.map((item) => (
            <Card key={item.id} onClick={() => openLink(item.link)} sx={card(item.iconColor)}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={avatar(item.iconColor)}>{item.icon}</Avatar>

                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" alignItems="center" spacing={3} sx={statsStack}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <OndemandVideo fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {item.videoCount}
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Schedule fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {item.duration}
                      </Typography>
                    </Stack>

                    <IconButton
                      size="small"
                      color="action"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLink(item.link);
                      }}
                    >
                      <Launch fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
