import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import ErrorBoundary from "./Errorboundary";
import FrontPage from "./Front";
import { ListProvider } from "./WishlistProvider";

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
        <AuthProvider>
          <ListProvider>
            <QueryClientProvider client={queryclient}>
              <FrontPage />
            </QueryClientProvider>
          </ListProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Main />);
