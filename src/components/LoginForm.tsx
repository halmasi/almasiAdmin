import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrowserRouter, useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loggedIn && navigate("/");
  }, [loggedIn]);

  const inputClasses = "rounded-lg h-10 w-full text-gray-700";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const fetchData = await fetch(process.env.BACKEND_API! + "/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const fetchedData = await fetchData.json();
    if (fetchedData.error) errors.root!.message = fetchedData.error;
    if (fetchData.status == 200) {
      console.log("hello");
      setLoggedIn(true);
    }
  };

  return (
    <div className="flex h-screen bg-blue-900 w-full items-center justify-center text-white">
      <form
        className="flex flex-col w-3/4 md:w-1/4 space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            className={inputClasses}
            type="email"
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            id="email"
          />
        </fieldset>
        <fieldset className="w-full">
          <label htmlFor="password">Password:</label>
          <input
            className={inputClasses}
            type="password"
            {...register("password")}
            id="password"
          />
        </fieldset>
        {errors.email && <p role="alert">{errors.email.message}</p>}
        {errors.root && <p role="alert">{errors.root.message}</p>}
        <button
          className="p-2 bg-blue-950 w-1/2 md:w-1/4 rounded-lg self-center"
          type="submit"
        >
          login
        </button>
      </form>
    </div>
  );
}
