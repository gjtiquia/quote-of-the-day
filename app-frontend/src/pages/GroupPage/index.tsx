import { useEffect } from "react"

const dummyLongQuote: Quote = {
    quote: "some really long quote so that i can test word warp and all that stuff some really long quote so that i can test word warp and all that stuff some really long quote so that i can test word warp and all that stuff",
    author: "poor developer",
    date: new Date(2024, 8, 23)
}

interface GroupPageProps {
    onBackClicked: () => void,
}

export function GroupPage(props: GroupPageProps) {
    const groupName = "辦公室語錄";
    const groupCode = "123456";

    const quoteOfTheDay: Quote = {
        quote: "it works on my machine it works on my machine it works on my machine it works on my machine it works on my machine it works on my machine it works on my machine it works on my machine it works on my machine",
        author: "poor developer",
        date: new Date(2024, 8, 23)
    }

    const allQuotes: Quote[] = [
        dummyLongQuote,
        dummyLongQuote,
        dummyLongQuote,
        dummyLongQuote,
        dummyLongQuote,
        dummyLongQuote,
    ]

    // Set title on mount
    useEffect(() => { document.title = groupName }, [groupName])

    function onBackClicked() {
        document.title = "Quote of the Day 是日語錄"; // Back to original
        props.onBackClicked();
    }

    return (
        <>
            <div className="absolute top-0 p-2">
                <button className="bg-stone-800 text-white px-4 py-2 rounded-md" onClick={() => onBackClicked()}>
                    Back 返回
                </button>
            </div>

            <div className="h-dvh flex flex-col items-center gap-8 p-2 sm:p-16">

                <section className="flex flex-col gap-2 items-center">
                    <h1 className="text-white text-2xl sm:text-3xl font-bold">
                        {groupName}
                    </h1>

                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-white">
                            Code: {groupCode}
                        </h2>
                    </div>
                </section>

                <section className="bg-stone-800 p-8 rounded-md flex flex-col gap-4 items-center max-w-screen-md">
                    <h2 className="text-white font-bold">
                        Quote of the Day 是日語錄
                    </h2>

                    <div>
                        <p className="text-white">
                            "{quoteOfTheDay.quote}"
                        </p>

                        <p className="text-white text-right italic">
                            - {quoteOfTheDay.author}
                        </p>
                    </div>
                </section>

                <section className="bg-stone-800 w-full rounded-md p-4 flex flex-col gap-4 max-w-screen-md">
                    <h2 className="text-white font-bold">
                        All Quotes 所有語錄
                    </h2>

                    <QuoteCard quote={dummyLongQuote} />

                    {allQuotes.map(quote => <QuoteCard quote={quote} />)}

                </section>
            </div >
        </>
    )
}

interface Quote {
    quote: string,
    author: string,
    date: Date
}

function QuoteCard({ quote }: { quote: Quote }) {

    return (
        <div className="bg-stone-900 p-4 rounded-md">
            <p className="text-white">
                "{quote.quote}"
            </p>

            <p className="text-white text-right italic">
                - {quote.author} ({quote.date.getFullYear()}-{quote.date.getMonth()}-{quote.date.getDate()})
            </p>
        </div>
    )
}

