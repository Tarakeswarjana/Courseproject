import "./App.css";
import "./Pages/Home/home.css"
import IndexRoute from "./Route";
import HttpClient from "./utils/HttpClient";
import { useDispatch } from "react-redux";
import { setuser } from "./Redux/reducer/User";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Component/FullPageLoader/Loading";

function App() {
  const loading = useSelector((state) => state.Load.loading);
  // console.log("load", loading);

  return (
    <>
      {loading && <Loading />}
      <IndexRoute />
    </>
  );
}

export default App;
