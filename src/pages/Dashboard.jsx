import { useEffect } from "react";
import { useTasksStore } from "../store/useTasksStore"
import TaskItem from "../components/TaskItem";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"

const Dashboard = () => {
  const { loading, error, tasks, fetchTasks } = useTasksStore();

  useEffect(() => {
    fetchTasks();
  }, [])

  let runningTasks = tasks.filter((task) => task.completed === false).slice(0, 3);
  let completed = tasks.filter((task) => task.completed === true).slice(0, 3);

  return (
    <>
      {loading && (
        <h1>Loading....</h1>
      )}
      {error && (
        <h1>{error.message}</h1>
      )}
      {tasks.length > 0 && (
        <div className="task-list flex justify-between gap-6 mt-10 w-full">
          <div className="running-tasks flex flex-col items-center gap-6 w-1/2">
            {
              runningTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            }
            <Link to={"/all-running"} className="flex items-center gap-2 text-lg">
              Show All Running Tasks
              <ArrowRight />
            </Link>
          </div>
          <div className="completed-tasks flex flex-col items-center gap-6 w-1/2">
            {
              completed.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            }
            <Link to={"/all-completed"} className="flex items-center gap-2 text-lg">
              Show All Completed Tasks
              <ArrowRight />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard