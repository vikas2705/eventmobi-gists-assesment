import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchGists from "./pages/search-gists";
import GistDetail from "./pages/gist-detail";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<SearchGists />} />
                <Route path='/gist/:gistId' element={<GistDetail />} />
            </Routes>
        </div>
    );
}

export default App;
