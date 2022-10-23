import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../components/form-inputs";

interface IFormInput {
  text: string;
}

export default function NewOrder() {
  const defaultValues = {
    text: ''
  };

  const formMethods = useForm<IFormInput>({ defaultValues });
  const { handleSubmit } = formMethods;

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2" component="h1" gutterBottom> New Order Form</Typography>
        <Stack spacing={2}>
          <TextInput
            name="text"
            label="Text Input"
            fullWidth
            size="small"
            variant="standard"
          />
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </form>
    </FormProvider>
  )
}
