import { useState } from "react"
import { LandingPage, JoinGroupPage, GroupPage } from "./pages"

type Page = "LandingPage" | "JoinGroupPage" | "GroupPage";

function App() {
    const [page, setPage] = useState<Page>("LandingPage");

    if (page === "LandingPage")
        return (
            <LandingPage
                onCreateGroupClicked={() => setPage("GroupPage")}
                onJoinGroupClicked={() => setPage("JoinGroupPage")}
            />
        )

    if (page === "JoinGroupPage")
        return (
            <JoinGroupPage
                onBackClicked={() => setPage("LandingPage")}
                onJoinClicked={(groupCode) => { console.log(`joining ${groupCode}...`); setPage("GroupPage") }}
            />
        )

    if (page === "GroupPage")
        return (
            <GroupPage
                onBackClicked={() => setPage("LandingPage")}
            />
        )
}

export default App
