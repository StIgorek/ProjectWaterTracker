import css from "./signinform.module.css";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({
      email: "",
      password: "",
    });
  };
  const error = (data) => console.log(data);

  const isValidateEmail = () => console.log(true);
  const isValidatePwd = () => console.log(true);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, error)} className={css.container}>
        <h3 className={css.h3}>Sign In</h3>
        <div className={css.wrapper}>
          <label htmlFor="" className={css.label}>
            <p className={css.p}>Enter your email</p>
            <input
              type="text"
              className={css.input}
              placeholder="E-mail"
              {...register("email", {
                required: true,
                validate: isValidateEmail,
              })}
              aria-invalid={errors.email ? true : false}
            />
          </label>
          <label htmlFor="" className={css.label}>
            <p className={css.p}>Enter your password</p>
            <input
              type="text"
              className={css.input}
              placeholder="Password"
              {...register("password", {
                required: true,
                validate: isValidatePwd,
              })}
              aria-invalid={errors.password ? true : false}
            />
          </label>
        </div>

        <button className={css.btn}>Sign In</button>

        <p className={css.a}>
          {" "}
          <a href="">Sign up</a>{" "}
        </p>
      </form>
    </>
  );
}
