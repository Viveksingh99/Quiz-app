import React, { useEffect } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { emptyQues, emptyScore, timerEmpty } from "./Action/action";

const Result = ({ retry, score }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(timerEmpty());
  }, []);
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Your Total Score is :{score}
      </Typography>
      <Button
        sx={{ marginBottom: "2rem" }}
        variant="contained"
        onClick={() => {
          dispatch(emptyScore());
          dispatch(emptyQues());
          retry();
        }}
        color="secondary"
      >
        Retry
      </Button>
      <Typography variant="h4">Thank You For Visiting Again !!!</Typography>
    </Stack>
  );
};

export default Result;
