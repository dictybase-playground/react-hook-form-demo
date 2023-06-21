import { Button, Grid } from "@material-ui/core";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";
import { type formData } from "./types";
import "./App.css";

function App() {
  const methods = useForm<formData>({ mode: "onTouched" });
  
  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log("submitted")
    console.log(data);
  };

  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container direction="row" spacing={4}>
          <Grid item>
            <LeftForm />
          </Grid>
          <Grid item>
            <RightForm />
          </Grid>
        </Grid>
        <Button type="submit"> {methods.formState.isSubmitSuccessful ? "Success!" : "Submit"} </Button>
      </form>
    </FormProvider>
  );
}

export default App;
