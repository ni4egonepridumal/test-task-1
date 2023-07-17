import { Aside } from "./componets/aside";
import { AboutUser } from "./pages/AboutUser";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";


function App() {
  return (
    <div className={styles.item}>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUser" element={<AboutUser />}></Route>
      </Routes>
    </div>
  )
}
export default App;
