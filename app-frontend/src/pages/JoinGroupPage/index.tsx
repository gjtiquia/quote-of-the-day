import { useState } from "react"

interface JoinGroupPageProps {
    onBackClicked: () => void,
    onJoinClicked: (groupCode: string) => void,
}

export function JoinGroupPage(props: JoinGroupPageProps) {
    const [groupCode, setGroupCode] = useState("");

    return (
        <>
            <div className="absolute p-2">
                <button className="bg-stone-800 text-white px-4 py-2 rounded-md" onClick={() => props.onBackClicked()}>
                    Back 返回
                </button>
            </div>

            <div className="h-dvh flex flex-col justify-center items-center gap-16">

                <section className="flex flex-col gap-8 items-center">
                    <h1 className="text-white text-2xl sm:text-3xl font-bold">
                        Join Group
                    </h1>

                    <div className="flex flex-col gap-4 items-center">
                        <p className="text-white">
                            Ask your friend to send you the code!
                        </p>

                        <p className="text-white">
                            冇code點入呀
                        </p>
                    </div>

                </section>

                <section className="flex flex-col gap-4">
                    <input
                        className="p-2 rounded-md text-center"
                        placeholder="Enter Code"
                        value={groupCode} onChange={e => setGroupCode(e.target.value)}
                    />

                    <button className="bg-stone-700 text-xl text-white font-bold px-4 py-2 rounded-md" onClick={() => props.onJoinClicked(groupCode)}>
                        Join
                    </button>
                </section>
            </div >
        </>
    )
}
