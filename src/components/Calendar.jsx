function DozenDisplay(props) {
    const { weeksArr, yearIndex, weekNum, finalWeek } = props
    return (
        <div className="year-grid">
            {weeksArr.map((week, weekIndex) => {
                const currWeek = yearIndex * 52 + weekIndex 
                const dotstyle = currWeek == finalWeek - 1 ? " death" : 
                currWeek < weekNum ? " solid" :
                currWeek == weekNum ? " pulse" : ""
                return(
                    <div className={"dot "+ dotstyle} key={weekIndex}></div>
                )
            })}
        </div>
    )
}

export default function Calendar(props) {
    const { lifeExpectancy, data } = props

    const yearsArr = [...Array(lifeExpectancy).keys()]
    const weeksArr = [...Array(52).keys()]

    const weekNum = lifeExpectancy * 52 - parseInt(data["weeks"])
    const finalWeek = lifeExpectancy * 52
    return (
        <section>
            <p><i>Each square of dots represents 52 weeks / 1 year of your life.</i></p>
            <div className="dozen-grid">
                {yearsArr.map((year, yearIndex) => {
                    return (
                        <DozenDisplay key={yearIndex} weeksArr={weeksArr} yearIndex={yearIndex} weekNum={weekNum} finalWeek={finalWeek} />
                    )
                })}
            </div>
        </section>
    )
}