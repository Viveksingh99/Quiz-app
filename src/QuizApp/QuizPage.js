import React, { useState } from "react";
import { Stack } from "@mui/material";
import Quiz from "./Quiz";
import QuizJoin from "./QuizJoin";
import { Route, Routes } from "react-router";
import Result from "./Result";

const QuizPage = () => {
  const [isQuizStart, setIsQuizStart] = useState(false);

  return (
    <Stack>
      {isQuizStart ? (
        <Quiz retry={() => setIsQuizStart(false)} />
      ) : (
        <QuizJoin start={() => setIsQuizStart(true)} />
      )}
      {/*       
      <Routes>
        <Route path='/' element={<QuizJoin />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result/>} />
      </Routes> */}
    </Stack>
  );
};

export default QuizPage;
