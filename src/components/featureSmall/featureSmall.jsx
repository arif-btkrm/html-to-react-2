import ItemImg from './../../assets/images/featured-item-01.png'
import SmallItem from './smallItem'


function FeatureSmall(){
    return(
        <section className="section home-feature">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {/* <!-- ***** Features Small Item Start ***** --> */}
                        <SmallItem
                            img = {ItemImg}
                            title ="Modern Strategy"
                            desc = "Customize anything in this template to fit your website needs"
                        />
                        <SmallItem
                            img = {ItemImg}
                            title ="Best Relationship"
                            desc = "Contact us immediately if you have a question in mind"
                        />
                        <SmallItem
                            img = {ItemImg}
                            title ="Ultimate Marketing"
                            desc = "You just need to tell your friends about our free templates"
                        />
                        {/* <!-- ***** Features Small Item End ***** --> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default FeatureSmall;