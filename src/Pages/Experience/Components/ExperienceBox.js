const ExperienceBox = ({name, subject, dateFrom, dateTill, desc}) => {
    return(
        <div>
            <div className="flex flex-row justify-between">
                <h2>{name}</h2>
                <span className="text-lg">{dateFrom} - {dateTill}</span>
            </div>
            <h3 className="text-orange-400">{subject}</h3>
            <hr />
            <p className="text-lg mt-4">{desc}</p>
        </div>
    )
}
export default ExperienceBox