import { useEffect } from "react";
import { useTasksStore } from "../store/useTasksStore";
import TaskItem from "../components/TaskItem";

const AllRunningTasks = () => {
  const { loading, error, tasks, fetchTasks } = useTasksStore();

  useEffect(() => {
    fetchTasks();
  }, [])

  let runningTasks = tasks.filter((task) => task.completed === false);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && (
        <h1>{error.message}</h1>
      )}
      <div className="mt-10">
        <div className="mb-6 bg-slate-300 p-10 text-center rounded rounded-xl">
          <h1 className="font-bold text-2xl">All your <span className="text-sky-500">Active</span> tasks</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {
            runningTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AllRunningTasks