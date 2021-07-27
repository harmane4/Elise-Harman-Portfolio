import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    console.log(errors);
    event.target.reset();
  };

  return (
    <div>
      <h1>Let's Chat</h1>
      <form className="container is-fluid" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Name:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register("Name", { required: true })}
          />
          {errors.Name && <p>Please enter your name</p>}
        </div>
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && <p>Invalid Email entered</p>}
        </div>
        <label className="label">Message</label>
        <div className="control">
          <input
            className="textarea"
            type="text"
            {...register("Message", { required: true })}
          />
        </div>

        {errors.Message && <p>Please enter your message</p>}
        <input className="button" type="submit" />
      </form>
    </div>
  );
}
