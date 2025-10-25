import {RouterProvider,createBrowserRouter,createRoutesFromElements ,Route, Navigate} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AppPage from "./pages/AppPage.jsx"
import InstallationPage from "./pages/installationPage.jsx"
import AppDetailPage from "./pages/AppDetailPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to='/'>
      <Route index element={<Navigate to="/home"/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='apps' element={<AppPage/>}/>
      <Route path='apps/:id' element={<AppDetailPage/>}/>
      <Route path='installation' element={<InstallationPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
)

  return <RouterProvider router={router}/>
   
}
  



export default App
