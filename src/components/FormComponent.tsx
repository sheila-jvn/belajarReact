import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { reportData } from "../types";
import { Schema } from "../schema";
import { useDispatch } from "react-redux";
import { addReport } from "../store/reportSlice";

async function fetchReports(reportData: reportData) {
  const response = await fetch("http://localhost:3000/reports", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reportData),
  });
  const data = await response.json();
  return data;
}

export default function FormComponent() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchReports,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit = (data: reportData) => {
    dispatch(addReport(data));
    mutation.mutate(data);
    reset();
  };

  return (
    <>
      <div>
        <h2>Reports</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nama: </label>
          <input {...register("name")} type="text" name="name" />
          {errors.name && <p>{errors.name?.message}</p>}
          <br />
          <label htmlFor="position">Position: </label>
          <input {...register("position")} type="text" name="position" />
          {errors.position && <p>{errors.position?.message}</p>}
          <br />
          <label htmlFor="task">Task: </label>
          <input {...register("task")} type="text" name="task" />
          {errors.task && <p>{errors.task?.message}</p>}
          <br />
          <label htmlFor="blocker">Blocker: </label>
          <input {...register("blocker")} type="text" name="blocker" />
          {errors.blocker && <p>{errors.blocker?.message}</p>}
          <br />
          <label htmlFor="date">Date: </label>
          <input {...register("date")} type="date" name="date" />
          {errors.date && <p>{errors.date?.message}</p>}
          <br />
          <button type="submit">
            {mutation.isLoading ? "Saving..." : "Save"}
          </button>
        </form>
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p>Report submitted successfully!</p>}
      </div>
    </>
  );
}
