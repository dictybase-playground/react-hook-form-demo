import { Grid, TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const RightForm = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TextField
          label="City"
          error={!!errors.city}
          helperText={errors.city?.message || ""}
          {...register("city", { required: "City is required" })}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Country"
          error={!!errors.country}
          helperText={errors.country?.message || ""}
          {...register("country", { required: "Country is required" })}
        />
      </Grid>
    </Grid>
  );
};

export default RightForm;
