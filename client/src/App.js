import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailedView";
import { Box } from "@mui/material";
import DataProvider from "./context/dataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "55px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
