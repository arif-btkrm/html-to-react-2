import PriceItem from "./priceItem"

function Pricing() {
    return (
        <section className="section colored" id="pricing-plans">
            <div className="container">
                {/* <!-- ***** Section Title Start ***** --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Pricing Plans</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Section Title End ***** --> */}

                <div className="row">
                    {/* <!-- ***** Pricing Item Start ***** --> */}
                    <PriceItem
                        itemType = ""
                        title="Starter"
                        currency="$"
                        price="14.50"
                        period="monthly"
                        space={{ 'type': "active", 'text': "60 GB space" }}
                        transfer={{ 'type': "active", 'text': "600 GB transfer" }}
                        panel={{ 'type': "active", 'text': "Pro Design Panel" }}
                        support={{ 'type': "", 'text': "15-minute support" }}
                        emails={{ 'type': "", 'text': "Unlimited Emails" }}
                        security={{ 'type': "", 'text': "24/7 Security" }}
                    />

                    <PriceItem
                        itemType = "active"
                        title="Premium"
                        currency="$"
                        price="21.50"
                        period="monthly"
                        space={{ 'type': "active", 'text': "120 GB space" }}
                        transfer={{ 'type': "active", 'text': "1200 GB transfer" }}
                        panel={{ 'type': "active", 'text': "Pro Design Panel" }}
                        support={{ 'type': "active", 'text': "15-minute support" }}
                        emails={{ 'type': "", 'text': "Unlimited Emails" }}
                        security={{ 'type': "", 'text': "24/7 Security" }}
                    />
                    
                    <PriceItem
                        itemType = ""
                        title="Advanced"
                        currency="$"
                        price="42.00"
                        period="monthly"
                        space={{ 'type': "active", 'text': "250 GB space" }}
                        transfer={{ 'type': "active", 'text': "5000 GB transfer" }}
                        panel={{ 'type': "active", 'text': "Pro Design Panel" }}
                        support={{ 'type': "active", 'text': "15-minute support" }}
                        emails={{ 'type': "active", 'text': "Unlimited Emails" }}
                        security={{ 'type': "active", 'text': "24/7 Security" }}
                    />
                    {/* <!-- ***** Pricing Item End ***** --> */}
                </div>
            </div>
        </section>
    )
}

export default Pricing