import React from "react";

import Layout from "../components/layout";
import Button from "../components/button";
import { Input, TextArea } from "../components/input"; // named import
// import Input from "../components/input"; import default

export default function Index() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
      <Button />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
      <input placeholder="name" />
    </Layout>
  );
}
