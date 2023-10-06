import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import Layout from "@/components/layout";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { useToken } from "@/utils/states/contexts/token-context";
import Swal from "@/utils/swal";
import { login } from "@/utils/api/auth/api";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { changeToken } = useToken();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      <p>Login</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          register={register}
          name="username"
          label="Username"
          error={errors.username?.message}
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
