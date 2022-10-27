import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FormProvider, useForm } from "react-hook-form";
import { Post, useCreatePostMutation } from "../services/api/generated/api";
import { TextInput } from "./form-inputs";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const NewPost = () => {
  const defaultValues = {
    title: "",
    body: "",
  };

  const formMethods = useForm<Post>({ defaultValues });
  const { handleSubmit } = formMethods;

  const [
    createPost,
    {
      isSuccess: isCreateSuccess,
      isLoading: isCreateInProgress,
      data: createdPost,
    },
  ] = useCreatePostMutation();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    if (isCreateSuccess) {
      setIsSnackbarOpen(true);
    }
  }, [isCreateSuccess]);

  const onSubmit = (data: Post) => {
    createPost({
      post: {
        userId: 1,
        ...data,
      },
    });
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack mt={2} spacing={2}>
            <TextInput name="title" label="Title" fullWidth size="small" />
            <TextInput
              name="body"
              label="Body"
              fullWidth
              size="small"
              multiline
              rows={4}
            />
            {!isCreateInProgress && (
              <Button variant="contained" type="submit">
                Create
              </Button>
            )}
            {isCreateInProgress && <CircularProgress />}
          </Stack>
        </form>
      </FormProvider>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert elevation={6} variant="filled" onClose={handleCloseSnackbar}>
          A new post with id {createdPost?.id} has been created
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewPost;
