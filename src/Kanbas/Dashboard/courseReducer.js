import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
  courses: [],
  course: { title: "New Course" },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      },
    addNewCourse: (state, action) => {
      state.courses = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.courses,
      ];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) => {
        if (course._id === action.payload._id) {
          return action.payload;
        } else {
          return course;
        }
      });
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});


export const { addNewCourse, deleteCourse,
  updateCourse, setCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

