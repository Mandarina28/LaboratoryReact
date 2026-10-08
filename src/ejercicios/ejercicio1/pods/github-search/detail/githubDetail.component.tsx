import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import { GithubDetailVM } from "./githubDetail.vm";
import * as styles from "./githubDetail.styles";

interface Props {
  member: GithubDetailVM;
  onBack: () => void;
}

export const GithubDetail: React.FC<Props> = ({ member, onBack }) => {
  return (
    <Box sx={styles.pageContainerStyles}>
      <Card sx={styles.cardStyles}>
        {/* HEADER */}
        <Box sx={styles.headerStyles}>
          <Typography variant="h5" sx={styles.titleStyles}>
            {member.login}
          </Typography>

          <Chip label={`#${member.id}`} sx={styles.chipStyles} />
        </Box>

        {/* IMAGE */}
        <Box sx={styles.imageContainerStyles}>
          <Box
            component="img"
            src={member.avatarUrl}
            alt={member.login}
            sx={styles.imageStyles}
          />
        </Box>

        {/* CONTENT */}
        <CardContent sx={styles.contentContainerStyles}>
          <Box sx={styles.infoContainerStyles}>
            <Typography sx={styles.infoTextStyles}>
              <strong>Name:</strong> {member.name || "Unknown"}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Company:</strong> {member.company || "Unknown"}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Followers:</strong> {member.followers}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Following:</strong> {member.following}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Public repos:</strong> {member.publicRepos}
            </Typography>

            <Typography sx={styles.bioTextStyles}>
              {member.bio || "No bio available"}
            </Typography>
          </Box>

          {/* BUTTON */}
          <Box sx={styles.buttonContainerStyles}>
            <Button
              onClick={onBack}
              variant="contained"
              sx={styles.backButtonStyles}
            >
              Back to members
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
