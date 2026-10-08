import React from "react";
import { MemberEntity } from "./githubSearch.vm";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import * as styles from "./githubSearch.styles";

interface Props {
  members: MemberEntity[];
  inputValue: string;
  page: number;
  pageSize: number;
  setInputValue: (value: string) => void;
  onSearch: () => void;
  onNavigateRickMorty: () => void;
  onNavigateDetail: (login: string) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const GithubSearch: React.FC<Props> = ({
  members,
  inputValue,
  page,
  pageSize,
  setInputValue,
  onSearch,
  onNavigateRickMorty,
  onNavigateDetail,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <Box sx={styles.pageContainerStyles}>
      <Typography variant="h3" sx={styles.titleStyles}>
        GitHub Members
      </Typography>

      <Box sx={styles.searchContainerStyles}>
        <TextField
          label="Organization"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          sx={styles.searchInputStyles}
        />
        <Button variant="contained" onClick={onSearch}>
          {" "}
          Search
        </Button>

        <Button variant="outlined" onClick={onNavigateRickMorty}>
          Rick y morty
        </Button>
      </Box>
      <Box sx={styles.membersGridStyles}>
        {members.map((member) => (
          <Card key={member.id} sx={styles.cardStyles}>
            <Box sx={styles.imageContainerStyles}>
              <Box
                component="img"
                src={member.avatarUrl}
                alt={member.login}
                sx={styles.imageStyles}
              />
            </Box>

            <CardContent sx={styles.cardContentStyles}>
              <Typography variant="h6" sx={styles.memberLoginStyles}>
                {member.login}
              </Typography>

              <Typography sx={styles.memberIdStyles}>#{member.id}</Typography>

              <Button
                onClick={() => onNavigateDetail(member.login)}
                variant="contained"
                sx={styles.detailButtonStyles}
              >
                View detail
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
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
          disabled={members.length < pageSize}
          onClick={onNextPage}
          sx={styles.nextButtonStyles}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
