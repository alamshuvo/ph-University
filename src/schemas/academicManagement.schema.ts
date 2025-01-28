import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: "This Name Feild  is required" }),
    year: z.string({ required_error: "This Year Feild  is required" }),
    startMonth: z.string({
      required_error: "This startMonth Feild  is required",
    }),
    endMonth: z.string({ required_error: "This EndMonth Feild  is required" }),
  });