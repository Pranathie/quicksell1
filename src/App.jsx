import React, { useEffect } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import KanbannnBoard from "./components/KanbannnBoard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Actions/DataAction";
import Loading from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <TopNav />
      <hr style={{ marginTop: "10px" }} />
      <KanbannnBoard />
    </div>
  ) : (
    <Loading />
  );
};

export default App;
