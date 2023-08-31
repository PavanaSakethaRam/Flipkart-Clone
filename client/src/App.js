import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{marginTop:'55px'}}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
