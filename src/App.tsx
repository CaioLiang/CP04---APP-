import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home"))
const LazyProfile = lazy(() => import("./pages/Profile/Profile"))
const LazyList_Fill = lazy(() => import("./pages/List_Fill/List_Fill"))

function App() {
  return(
    <BrowserRouter>
    <Suspense fallback={<>Carregando</>}>
      <Routes>
        
        <Route path="/" element = {<LazyHome/>}/>
        <Route path="/perfil" element = {<LazyProfile/>}/>
        <Route path="/novalista" element = {<LazyList_Fill/>}/>

    </Routes>
    </Suspense>
  </BrowserRouter>
);
}

export default App;
