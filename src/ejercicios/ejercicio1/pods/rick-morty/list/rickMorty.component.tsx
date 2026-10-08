import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import * as styles from "./rickMortylist.styles";
import { CharacterVM } from "./rickMorty.vm";

interface Props {
  characters: CharacterVM[];
  page: number;
  hasNext: boolean;
  search: string;

  onSearch: (value: string) => void;

  onNavigateGithub: () => void;
  onNavigateDetail: (id: number) => void;

  onPreviousPage: () => void;
  onNextPage: () => void;
}
export const RickMorty: React.FC<Props> = ({
  characters,
  page,
  hasNext,
  search,
  onSearch,
  onNavigateGithub,
  onNavigateDetail,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <Box sx={styles.pageContainerStyles}>
      {/* HEADER */}
      <Box sx={styles.headerStyles}>
        <Typography variant="h3" sx={styles.titleStyles}>
          Rick & Morty
        </Typography>
        <Button
          variant="contained"
          onClick={onNavigateGithub}
          sx={styles.headerButtonStyles}
        >
          GitHub
        </Button>
      </Box>
      {/* BUSCADOR  */}
      <TextField
        label="Search character"
        value={search}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        variant="outlined"
        sx={styles.searchInputStyles}
      />
      {/* CARTAS */}
      <Box sx={styles.gridStyles}>
        {characters.map((character) => (
          <Card key={character.id} sx={styles.cardStyles}>
            <Box sx={styles.imageContainerStyles}>
              <Box
                component="img"
                src={character.image}
                alt={character.name}
                sx={styles.imageStyles}
              />
            </Box>
            <CardContent sx={styles.cardContentStyles}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {character.name}
              </Typography>
              <Typography sx={styles.memberIdStyles}>
                #{character.id}
              </Typography>
              <Button
                onClick={() => onNavigateDetail(character.id)}
                variant="contained"
                sx={styles.detailButtonStyles}
              >
                View detail
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* PAGINATION */}
      <Box sx={styles.paginationContainerStyles}>
        <Button
          variant="outlined"
          disabled={page === 1}
          onClick={onPreviousPage}
          sx={styles.previousButtonStyles}
        >
          Previous
        </Button>

        <Typography sx={styles.pageTextStyles}>Page {page}</Typography>

        <Button
          variant="contained"
          disabled={!hasNext}
          onClick={onNextPage}
          sx={styles.nextButtonStyles}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
