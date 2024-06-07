import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import  HomePage  from "./components/HomePage";
import ReportPage from "./components/ReportPage";
import Navigation from "./components/Navigation";
import ListPage from "./components/ListPage";
import "./App.css";

const App: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.navigation.currentPage);

  return(
    <div>
      <h1>Navigation with Redux</h1>
      <Navigation />
      {currentPage === "Home" && <HomePage />}
      {currentPage === "Reports" && <ReportPage />}
      {currentPage === "List" && <ListPage />}
    </div>
  )
}

export default App;
