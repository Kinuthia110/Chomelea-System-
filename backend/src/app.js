import express from "express";
import cors from "cors";
import path from "path";

import { ApolloServer } from "apollo-server-express";

import schema from "./graphql/schema.js";
import uploadRoutes from "./routes/uploadRoutes.js";



const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://YOUR_FRONTEND_URL.vercel.app"
  ],
  credentials: true
}));

app.use(
  "/quotations",
  express.static(path.join(process.cwd(), "src/invoices/generated"))
);
app.use(
  "/invoices",
  express.static(path.join(process.cwd(), "src/invoices/generated"))
);
const startApolloServer = async () => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req
    })
  });

  await server.start();

  server.applyMiddleware({
    app
  });
};
app.use("/api/uploads", uploadRoutes);
startApolloServer();

app.get("/", (req, res) => {
  res.send("CHOMELEA Backend Running");
});

export default app;