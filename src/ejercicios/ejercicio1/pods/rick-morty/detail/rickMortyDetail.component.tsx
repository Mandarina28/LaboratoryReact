import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { CharacterDetailVM } from "./rickMortyDetail.vm";
import * as styles from "./rickMortyDetail.styles";

interface Props {
  character: CharacterDetailVM;
  onBack: () => void;
}

export const RickMortyDetail: React.FC<Props> = ({ character, onBack }) => {
  return (
    <Box sx={styles.pageContainerStyles}>
      <Card sx={styles.cardStyles}>
        {/* HEADER */}
        <Box sx={styles.headerStyles}>
          <Typography variant="h5" sx={styles.titlesStyles}>
            {character.name}
          </Typography>

          <Chip label={`#${character.id}`} sx={styles.chipStyles} />
        </Box>

        {/* IMAGE */}
        <Box sx={styles.imageContainerStyles}>
          <Box
            component="img"
            src={character.image}
            alt={character.name}
            sx={styles.imageStyles}
          />
        </Box>

        {/* CONTENT */}
        <CardContent sx={styles.contentContainerStyles}>
          <Box sx={styles.boxContainerStyles}>
            <Typography sx={styles.infoTextStyles}>
              <strong>Status:</strong> {character.status}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Species:</strong> {character.species}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Gender:</strong> {character.gender}
            </Typography>

            <Typography sx={styles.infoTextStyles}>
              <strong>Origin:</strong> {character.origin}
            </Typography>
          </Box>

          {/* BUTTON */}
          <Box sx={styles.buttonContainerStyles}>
            <Button
              onClick={onBack}
              variant="contained"
              sx={styles.backButtonStyles}
            >
              Back to characters
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
