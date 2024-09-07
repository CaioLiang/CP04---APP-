import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home")) //Serve como variavel para Router
const LazyProfile = lazy(() => import("./pages/Profile/Profile"))
const LazyList_Fill = lazy(() => import("./pages/List_Fill/List_Fill"))

function App() {
  return(
    <BrowserRouter>
    <Suspense fallback={<>Carregando</>}>
      <Routes>
        <Route path="/" element = {<LazyHome/>}/>
        <Route path="/perfil" element = {<LazyProfile/>}/>
        <Route path="/listfill" element = {<LazyList_Fill/>}/>

    </Routes>
    </Suspense>
  </BrowserRouter>
  //controla as rotas do navegador  
  //sempre desse formato
);
}

export default App;
