import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/apolloClient";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </ApolloProvider>
);
