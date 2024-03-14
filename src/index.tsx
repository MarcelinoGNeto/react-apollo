import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/apolloClient";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./dictionary/i18nextConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  </ApolloProvider>
);
