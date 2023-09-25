import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import Layout from "@/components/layout";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { useToken } from "@/utils/states/contexts/token-context";
import { handleAuth } from "@/utils/states/redux/reducers/reducer";

const schema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  // const { token, setToken } = useToken();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleLogin(data) {
    // setToken(JSON.stringify(data));
    dispatch(handleAuth({ token: JSON.stringify(data), isLoggedIn: true }));
    navigate("/");
  }

  return (
    <Layout>
      <p>Login</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          register={register}
          name="email"
          label="Email"
          type="email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          name="password"
          label="Password"
          type="password"
          error={errors.password?.message}
        />
        <Button label="Submit" type="submit" />
      </form>
    </Layout>
  );
}
