import { useEffect } from "react";
import { useTasksStore } from "../store/useTasksStore";
import TaskItem from "../components/TaskItem";

const AllCompletedTasks = () => {
  const { loading, error, tasks, fetchTasks } = useTasksStore();

  useEffect(() => {
    fetchTasks();
  }, [])

  let completed = tasks.filter((task) => task.completed === true);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && (
        <h1>{error.message}</h1>
      )}
      <div className="mt-10">
        <div className="mb-6 bg-slate-300 p-10 text-center rounded rounded-xl">
          <h1 className="font-bold text-2xl">All your <span className="text-green-500">Completed</span> tasks</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {
            completed.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AllCompletedTasks