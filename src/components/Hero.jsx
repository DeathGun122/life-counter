export default function Hero(props) {
    const { name, data, percentage, handleToggleModal, resetData } = props
    return (

        <section id="hero">
            <h3 className="text-large">
                {name}, You have {data.weeks} weeks to live. Make them count 😊
            </h3>
            <div className="btns-container">
                <button onClick={handleToggleModal}>Not {name}?</button>
                <button onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Copied :)')
                }} className="link-button">Copy link</button>
                <button onClick={resetData} className="link-button">Reset Data</button>
            </div>
            <div className="progress-bar" >
                <div style={{ width: `${percentage}`}}>
                    <div>
                        <i className="fa-solid fa-baby"/>
                        <h6 className="bar-label">Birth</h6>
                    </div>
                    <h6>{percentage}</h6>
                </div>
                <div>
                    <div>
                        <h6 className="bar-label">Death</h6>
                        <i className="fa-solid fa-skull"/>
                    </div>
                </div>
            </div>
        </section>
    )
}