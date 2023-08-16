import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Errorboundary";
import FrontPage from "./Front";
const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const Main = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <FrontPage />
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Main />);
