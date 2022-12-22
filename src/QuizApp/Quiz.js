import React, { useReducer, useState, useEffect } from "react";
import {
  Stack,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Result from "./Result";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuestionIndex,
  appliedColor,
  appliedScore,
  negScore,
  updateColor,
  DisabledButton,
  DisabledButtonFalse,
  SetTimer,
  updateTime,
  emptyQues,
} from "./Action/action";
// const initialValue = {
//     currentQuestionIndex: 0
// }
// const reduce = (state, action) => {
//     switch (action.type) {
//         case 'Increment_currentIndex':
//             return { currentQuestionIndex: state.currentQuestionIndex + 1 }
//         case 'Decrement_currentIndex':
//             return { currentQuestionIndex: state.currentQuestionIndex - 1 }
//         default:
//             return state
//     }
// }

// const QuesData = [
//     {
//         id: 1,
//         question: "Where Are You From ?",
//         options: [
//             { id: 0, text: "Bhopal", isCorrect: true },
//             { id: 1, text: "Mumbai", isCorrect: false },
//             { id: 2, text: "Banglore", isCorrect: false },
//             { id: 3, text: "Gurgaon", isCorrect: false },
//         ],
//         score: 4,
//         negative: -2,
//     },
//     {
//         id: 2,
//         question: "Past you Stayed In Which City?",
//         options: [
//             { id: 0, text: "Manglore", isCorrect: false },
//             { id: 1, text: "Kolkata ", isCorrect: false },
//             { id: 2, text: "Banglore", isCorrect: false },
//             { id: 3, text: " delhi", isCorrect: true },
//         ],
//         score: 4,
//         negative: -2,
//     },
//     {
//         id: 3,
//         question: "Which City You Can't Visit?",
//         options: [
//             { id: 0, text: "Gurgaon", isCorrect: false },
//             { id: 1, text: "Mumbai", isCorrect: true },
//             { id: 2, text: " Delhi ", isCorrect: false },
//             { id: 3, text: "Jaipur", isCorrect: false },
//         ],
//         score: 4,
//         negative: -2,
//     },
//     {
//         id: 4,
//         question: "Where Are You ",
//         options: [
//             { id: 0, text: "Manglore", isCorrect: false },
//             { id: 1, text: " Jaipur ", isCorrect: true },
//             { id: 2, text: "Banglore", isCorrect: false },
//             { id: 3, text: "Mumbai", isCorrect: false },
//         ],
//         score: 4,
//         negative: -2,
//     },
//     {
//         id: 5,
//         question: "Where Are You Going ?",
//         options: [
//             { id: 0, text: " Banglore ", isCorrect: false },
//             { id: 1, text: "Mumbai", isCorrect: false },
//             { id: 2, text: "Manglore", isCorrect: false },
//             { id: 3, text: "UK", isCorrect: true },
//         ],
//         score: 4,
//         negative: -2,
//     },
// ];
const Quiz = ({ retry }) => {
  const QuestionIndex = useSelector(
    (state) => state.increment.currentQuestionIndex
  );
  const queAr = useSelector((state) => state.queArr.ar);
  const applyColor = useSelector((state) => state.color.color);
  const applyScore = useSelector((state) => state.score.score);
  const disabledRadio = useSelector((state) => state.disabled.disabled);
  const Count = useSelector((state) => state.timer.time);

  // console.log(Count)
  const dispatch = useDispatch();
  // let q = QuesData
  const isQuestionEnd = QuestionIndex === queAr.length;
  // let maxTime = 20
  const [State, setState] = useState([]);
  // const [state, dispatch] = useReducer(reduce, initialValue)
  const [applied, setApplied] = useState([]);
  // const [color, setcolor] = useState()
  // const [score, setScore] = useState(0)
  // const [dis, setdis] = useState(false)
  // const [count, setCount] = useState(maxTime)

  useEffect(() => {
    if (!disabledRadio) {
      const intervalId = setInterval(() => {
        if (Count > 0) {
          // setCount(prevCount => prevCount - 1);
          dispatch(SetTimer());
        }
      }, 1000);
      if (Count === 0) {
        handleNextClick();
      }
      return () => clearInterval(intervalId);
    }
  }, [Count]);

  const clickHandler = (id, value) => {
    // setdis(true)
    dispatch(DisabledButton());
    const a = { id: id, value: value };
    setApplied([...applied, a]);

    let correct = [];
    queAr[QuestionIndex].options.map((el) => {
      if (el.isCorrect === true) {
        correct = el.text;
      } else {
      }
    });
    // console.log(notcorrect)
    if (value === correct) {
      // setcolor('green')
      dispatch(appliedColor());

      // setScore(prev => prev + 4)
      dispatch(appliedScore());
      // console.log(score)
    } else {
      // setcolor('green')
      // dispatch(appliedColor())
      dispatch(appliedColor());

      // setScore(prev => prev - 2)
      dispatch(negScore());
    }
  };
  const handleChange = (id) => {
    setState(id);
  };
  const handleNextClick = () => {
    // setCount(maxTime)
    dispatch(updateTime());
    dispatch(incrementQuestionIndex());
    dispatch(updateColor());
    dispatch(DisabledButtonFalse());
    // setdis(false)
    setState();
    // setcolor()
    // dispatch(updateColor())
  };

  // const total = applyScore + Negative
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
          backgroundColor: "rgb(193, 225, 193)",
          width: "90vh",
          height: "79vh",
          boxShadow: "5px 5px 5px 0.5px rgba(52, 52, 53, 0.4)",
        }}
      >
        <Stack sx={{ marginTop: "4rem" }}>
          {isQuestionEnd ? (
            <Result retry={retry} score={applyScore} />
          ) : (
            <>
              <Stack sx={{ marginLeft: "1rem" }}>
                <Typography variant="h6"> Timer : {Count} </Typography>
                <Stack>
                  <Stack>
                    <Stack sx={{ marginLeft: "1rem", marginTop: "1rem" }}>
                      <Typography variant="h4">
                        {queAr[QuestionIndex].id}{" "}
                        {queAr[QuestionIndex].question}
                      </Typography>
                    </Stack>
                    <>
                      {queAr[QuestionIndex].options?.map((items, id) => {
                        return (
                          <Stack key={id}>
                            <FormControl>
                              <Stack
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "row",
                                  marginLeft: "2rem",
                                }}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  disabled={disabledRadio}
                                  checked={items.id === State ? true : false}
                                  value={items.text}
                                  onChange={() => handleChange(items.id)}
                                  onClick={() =>
                                    clickHandler(
                                      queAr[QuestionIndex].id,
                                      items.text
                                    )
                                  }
                                  name={items.text}
                                />
                                <label
                                  style={{
                                    color: applyColor
                                      ? items.isCorrect
                                        ? applyColor
                                        : "red"
                                      : "",
                                  }}
                                >
                                  <Typography variant="h6">
                                    {items.text}
                                  </Typography>
                                </label>
                              </Stack>
                            </FormControl>
                          </Stack>
                        );
                      })}
                    </>
                    <Stack>
                      {/* <button className='previous-button' onClick={() => dispatch({ type: 'Decrement_currentIndex' })}>Previous</button> */}
                      <Stack
                        direction="row"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <Typography variant="h6">
                          Score: {queAr[QuestionIndex].score}
                        </Typography>

                        <Typography variant="h6">
                          Negative: {queAr[QuestionIndex].negative}
                        </Typography>

                        <Typography variant="h6">
                          Total Score: {applyScore}
                        </Typography>

                        <Stack
                          sx={{
                            marginBottom: "1.5rem",
                          }}
                        >
                          <Button
                            sx={{
                              width: "100px",
                              fontSize: "1rem",
                              marginTop: "2rem",
                            }}
                            variant="contained"
                            color="success"
                            onClick={handleNextClick}
                          >
                            {QuestionIndex === 4 ? "End" : "Next"}
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Quiz;
