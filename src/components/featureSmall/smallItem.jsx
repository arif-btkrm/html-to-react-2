import ItemImg from './../../assets/images/featured-item-01.png'

function SmallItem(props){
    const ItemImg = props.img;
    const ItemTitle = props.title;
    const ItemDesc = props.desc

    return(
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
            <div className="features-small-item">
                <div className="icon">
                    <i><img src={ItemImg} alt=""/></i>
                </div>
                <h5 className="features-title">{ItemTitle}</h5>
                <p>{ItemDesc}</p>
            </div>
        </div>
    )
}
export default SmallItem;