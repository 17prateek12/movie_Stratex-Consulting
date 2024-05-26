import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import FavouriteMovie from "./pages/FavouriteMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<MoviePage />} />
            <Route path="favouritemovie" element={<FavouriteMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
