import { useState, useEffect } from "react";
import OpenAI from "openai";
import clsx from "clsx";

import Layout from "@/components/layout";
import { Input } from "@/components/input";
import Button from "@/components/button";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="grow flex flex-col overflow-auto">
        {results.map((result) => (
          <p
            className={clsx(
              "border rounded-xl p-3 mb-4 w-fit",
              result.message.role === "assistant" ? "self-start" : "self-end"
            )}
            key={result.message.content}
          >
            {result.message.content}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <Input
          placeholder="Insert prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          label={isLoading ? "Loading" : "Submit"}
          type="submit"
          disabled={isLoading}
          aria-disabled={isLoading}
        />
      </form>
    </Layout>
  );
}
