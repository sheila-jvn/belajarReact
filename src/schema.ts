import * as yup from "yup";

export const Schema = yup.object({
    name: yup.string().required(),
    position: yup.string().required(),
    task: yup.string().required(),
    blocker: yup.string(),
    date: yup.string().required(),
  });