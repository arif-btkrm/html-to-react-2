function PriceItem(props) {
    const itemType = props.itemType
    const title = props.title
    const currency = props.currency
    const price = props.price
    const period = props.period
    const space = props.space
    const transfer = props.transfer
    const panel = props.panel
    const support = props.support
    const emails = props.emails
    const security = props.security
    return (
        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
            <div className={`pricing-item ${itemType}`} >
                <div className="pricing-header">
                    <h3 className="pricing-title">{title}</h3>
                </div>
                <div className="pricing-body">
                    <div className="price-wrapper">
                        <span className="currency">{currency}</span>
                        <span className="price">{price}</span>
                        <span className="period">{period}</span>
                    </div>
                    <ul className="list">
                        <li className={space.type}>{space.text}</li>
                        <li className={transfer.type}>{transfer.text}</li>
                        <li className={panel.type}>{panel.text}</li>
                        <li className={support.type}>{support.text}</li>
                        <li className={emails.type}>{emails.text}</li>
                        <li className={security.type}>{security.text}</li>
                    </ul>
                </div>
                <div className="pricing-footer">
                    <a href="#" className="main-button">Purchase Now</a>
                </div>
            </div>
        </div>
    )
}

export default PriceItem