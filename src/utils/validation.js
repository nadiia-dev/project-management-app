import * as Yup from "yup";

export const projectValidationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Project name should be at least 3 characters long")
    .required("Project name is required"),
  description: Yup.string().optional(),
  dueTo: Yup.date()
    .typeError("Please enter a valid date")
    .required("Date is required")
    .min(new Date(), "The date should be in the future"),
});

export const taskValidationSchema = Yup.object({
  text: Yup.string()
    .min(3, "Task text should be at least 3 characters long")
    .required("Task text is required"),
});
