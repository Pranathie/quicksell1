import { createReducer } from "@reduxjs/toolkit";

// Reducer for managing all data (e.g., tickets and users)
export const DataReducer = createReducer(
  { loading: false, allTickets: [], allUsers: [] }, // Initial state
  (builder) => {
    builder
      .addCase("DATA_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("DATA_SUCCESS", (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUsers = action.payload.users;
      })
      .addCase("DATA_FAILURE", (state) => {
        state.loading = false;
        state.allTickets = [];
        state.allUsers = [];
      });
  }
);

// Reducer for managing selected data
export const SelectDataReducer = createReducer(
  { loading: false, selectedData: [], user: null, message: null }, // Initial state
  (builder) => {
    builder
      .addCase("SELECT_DATA_REQUEST", (state) => {
        state.loading = true;
        state.selectedData = [];
      })
      .addCase("SELECT_DATA_SUCCESS", (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user;
      })
      .addCase("SELECT_DATA_FAILURE", (state, action) => {
        state.loading = false;
        state.selectedData = [];
        state.message = action.payload.message;
      });
  }
);
