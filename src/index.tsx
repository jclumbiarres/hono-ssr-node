// Ejemplo de la documentación oficial de Hono para crear un servidor web con Hono y JSX.

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Top } from "./components/Hola";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/json", (c) => {
  return c.json({ message: "Hola Hono!" });
});

app.get("/salida", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

const port = 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
