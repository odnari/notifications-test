import Header from "./components/Header.jsx";
import Playground from "./components/Playground.jsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

            <main className={'flex items-center justify-center flex-grow'}>
                <Playground/>
            </main>
        </div>
    )
}

export default App
