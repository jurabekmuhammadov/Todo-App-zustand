import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AllTasks from "./pages/AllTasks"
import AllRunningTasks from "./pages/AllRunningTasks"
import AllCompletedTasks from "./pages/AllCompletedTasks"
import Creation from "./pages/Creation"
import TaskInfo from "./pages/TaskInfo"
import Layout from "./components/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/all-running" element={<AllRunningTasks />} />
          <Route path="/all-completed" element={<AllCompletedTasks />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/task-info" element={<TaskInfo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App