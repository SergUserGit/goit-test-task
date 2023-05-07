import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";

const Home = lazy(() => import("./components/Home/Home"));
const Tweets = lazy(() => import("./components/Tweets/Tweets"));

function App() {
  return (
    <div>
      <nav className={css.navLink}>
        <NavLink className={css.link} id={"linkHome"} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.link} id={"linkTweets"} to="/tweets">
          Tweets
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
