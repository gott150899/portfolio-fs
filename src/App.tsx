import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'

import Resume from './components/Resume'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
