import { useEffect } from "react"

interface GroupPageProps {
    onBackClicked: () => void,
}

export function GroupPage(props: GroupPageProps) {
    const groupName = "辦公室語錄"
    const groupCode = "123456"

    // Set title on mount
    useEffect(() => { document.title = groupName }, [groupName])

    function onBackClicked() {
        document.title = "Quote of the Day 是日語錄"; // Back to original
        props.onBackClicked();
    }

    return (
        <>
            <div className="h-dvh flex flex-col items-center gap-16 p-2 sm:p-16">

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

                {/* // TODO */}
                <section>
                    <div>
                        <h2>Quote of the Day 是日語錄</h2>
                    </div>
                </section>

                {/* // TODO */}
                <section>
                    <div>
                        <h2>All Quotes 所有語錄</h2>
                    </div>
                </section>
            </div >

            <div className="absolute bottom-0 p-2">
                <button className="bg-stone-800 text-white px-4 py-2 rounded-md" onClick={() => onBackClicked()}>
                    Back 返回
                </button>
            </div>
        </>
    )
}
