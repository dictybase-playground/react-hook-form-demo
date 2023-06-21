import { useFormContext } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const LeftForm = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TextField
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName?.type || ""}
          {...register("firstName", { required: true })}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName?.type || ""}
          {...register("lastName", { required: true })}
        />
      </Grid>
    </Grid>
  );
};

export default LeftForm;
