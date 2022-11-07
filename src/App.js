import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

function App() {
  return (
    <div className="App" >
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
