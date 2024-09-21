import { useState } from "react"
import { LandingPage, JoinGroupPage } from "./pages"

type Page = "LandingPage" | "JoinGroupPage";

function App() {
    const [page, setPage] = useState<Page>("LandingPage");

    if (page === "LandingPage")
        return (
            <LandingPage
                onCreateGroupClicked={() => console.log("create")}
                onJoinGroupClicked={() => setPage("JoinGroupPage")}
            />
        )

    if (page === "JoinGroupPage")
        return (
            <JoinGroupPage
                onBackClicked={() => setPage("LandingPage")}
                onJoinClicked={(groupCode) => console.log(`joining ${groupCode}...`)}
            />
        )
}

export default App
