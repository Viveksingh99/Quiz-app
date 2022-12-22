import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { timerEmpty, updateTime } from "./Action/action";
const QuizJoin = ({ start }) => {
  const dispatch = useDispatch();
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          marginTop: "5rem",
          backgroundColor: "rgba(186, 212, 218)",
          width: "90vh",
          height: "79vh",
          boxShadow: "5px 5px 5px 0.5px rgba(52, 52, 53, 0.4)",
        }}
      >
        <Stack
          sx={{
            margin: "2rem",
            display: "flex",
            alignItems: "flexStart",
            justifyContent: "flexStart",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            Join Quiz
          </Typography>
          <Typography variant="h6">
            Before starting the quiz, please read the instruction carefully.
          </Typography>
          <Typography variant="h6">
            The Quiz consists of 5 questions. Each question has 4 options only
            one option is correct from each option.
          </Typography>
          <Typography variant="h6">
            When a candidate gives a wrong answer to a question, the candidate
            punished -2 negative marks. If candidates gives right answer the
            candidate takes 4 marks.
          </Typography>
          <Typography variant="h6">
            Your score will be shown top right corner
          </Typography>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                dispatch(updateTime());
                start();
              }}
              variant="contained"
              size="medium"
              sx={{
                width: "200px",
                fontSize: "1rem",
                marginTop: "2rem",
              }}
            >
              Start
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default QuizJoin;
