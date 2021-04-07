function TestiItem(props){

    const testImg = props.testImg;
    const desc = props.desc;
    const usrImg = props.usrImg;
    const usrName = props.name;
    const dig = props.dig
        return(
        <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src={testImg} alt="test-icon" /></i>
                            <p>{desc}</p>
                            <div className="user-image">
                                <img src={usrImg} alt="user image"/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">{usrName}</h3>
                                <span>{dig}</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default TestiItem