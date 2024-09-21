interface LandingPageProps {
    onCreateGroupClicked: () => void,
    onJoinGroupClicked: () => void,
}

export function LandingPage(props: LandingPageProps) {
    return (
        <div className="h-dvh flex flex-col justify-center items-center gap-16">

            <section className="flex flex-col gap-8 items-center">
                <h1 className="text-white text-2xl sm:text-3xl font-bold">
                    Quote of the Day 是日語錄
                </h1>

                <div className="flex flex-col gap-4 items-center">
                    <p className="text-white">
                        Never forget amazing quotes ever again.
                    </p>

                    <p className="text-white">
                        人哋都講咗出口，梗係笑多幾年先啦
                    </p>
                </div>

            </section>

            <section className="flex gap-4">
                <button className="bg-stone-700 text-xl text-white font-bold px-4 py-2 rounded-md" onClick={() => props.onCreateGroupClicked()}>
                    Create Group
                </button>

                <button className="bg-stone-700 text-xl text-white font-bold px-4 py-2 rounded-md" onClick={() => props.onJoinGroupClicked()}>
                    Join Group
                </button>
            </section>
        </div >
    )
}
