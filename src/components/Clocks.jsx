function Clock(props) {
    const { clock, clockIndex, data } = props
    return (
        <div key={clockIndex} className="card clock-card">
            <div className="circle" style={{}}>
                <div className={"ticker" + " "}></div>
            </div>
            <div>
                <h5>{data[clock]}</h5>
                <p>{clock}</p>
            </div>
        </div>
    )
}

export default function Clocks(props) {
    const { data } = props
    return (
        <section id="clocks">
            <p><i>Time remaining in different units.</i></p>
            <div className="clocks-grid">
                {Object.keys(data).map((clock, clockIndex) => {
                    return (
                        Clocks({ clock, clockIndex, data })
                    )
                })}
            </div>
        </section>
    )
}