export default function Summary(props) {
    const { birthDate, lifeExpectancy } = props
    
    const finalYear = Number(birthDate.split("-")[0]) + lifeExpectancy
    return (
        <section id="summary">
            <div>
                <p className="text-gradient">
                    <i className="fa-solid fa-heart-crack"/>
                    You&apos;ll probably die in the year <strong>{finalYear}</strong> at the age of <strong>{lifeExpectancy}</strong>.
                </p>
            </div>
            <h4>Yesterday is history, tommorow is a mystery and today is a gift. That&apos;s why we call it the present</h4>
            <h4>By Ralph Waldo Emerson</h4>
        </section>
    )
}