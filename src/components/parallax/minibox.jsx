function MiniBox(props) {
    const title = props.title
    const desc = props.desc
    const img = props.img
    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <a href="#" className="mini-box">
                <i><img src={img} alt="" /></i>
                <strong>{title}</strong>
                <span>{desc}</span>
            </a>
        </div>
    )
}

export default MiniBox