import React from 'react';
import './App.css';
import {ColorModeContext, useMode} from './themes';
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Dashboard';
import Skill from './scenes/dashboard/Skill';
import Project from './scenes/dashboard/Project';
import Education from './scenes/dashboard/Education';
import Publication from './scenes/dashboard/Publication';
import Award from './scenes/dashboard/Award';
import Work from './scenes/dashboard/Work';
import Calender from './scenes/dashboard/Calender';
import PieChart from './scenes/dashboard/PieChart';
import Bubble from './scenes/dashboard/Bubble';
import Network from './scenes/dashboard/Network';
import { Routes, Route} from 'react-router-dom';

const App  =()=> {
  const [theme, colorMode] = useMode();
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          <Sidebar />
           <main className="content">
           <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/skill" element={<Skill />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/publication" element={<Publication />}/>
            <Route path="/award" element={<Award />}/>
            <Route path="/work" element={<Work />}/>
            <Route path="/calender" element={<Calender />}/>
            <Route path="/pieChart" element={<PieChart />}/>
          </Routes>
        </main>
        </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
     
    );
}

export default App;
