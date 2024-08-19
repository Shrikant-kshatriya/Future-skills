import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelpCenter from './HelpCenter';
import PostCard from "./PostCard";
import SingleCard from "./SingleCard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HelpCenter />} />
                <Route path="/post-card" element={<PostCard />} />
                <Route path="/card/:title" element={<SingleCard />} />
            </Routes>
        </Router>
    );
}

export default App;
