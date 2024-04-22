import { useState } from "react";
import CategorySelect from "../components/ui/category-select"
import PrioritySelect from "../components/ui/priority-select"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTasksStore } from "@/store/useTasksStore";
import { useForm } from "react-hook-form";

const Creation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createTask } = useTasksStore();

  const onSubmit = async (data) => {
    createTask(data);
  };
  return (
    <div className="mt-10">
      <div className="mb-6 bg-slate-300 p-10 text-center rounded rounded-xl">
        <h1 className="font-bold text-2xl">Create your <span className="text-green-500">New</span> task</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
            Task title
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            </div>
            <input
              required
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <CategorySelect />
        </div>
        <div>
          <PrioritySelect />
        </div>
        <div>
          <label htmlFor="endTime" className="block text-sm font-medium leading-6 text-gray-900">
            Set the end time
          </label>
          <DatePicker id="endTime" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <button type="submit">Add to list</button>
      </form>
    </div>
  )
}

export default Creation;