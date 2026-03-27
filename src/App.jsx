import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import AppShell from "./components/layout/AppShell";
import { RideProvider } from "./context/RideContext";

function App() {
  return (
    <BrowserRouter>
      <RideProvider>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </RideProvider>
    </BrowserRouter>
  );
}

export default App;
