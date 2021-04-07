import usrImg from './../../assets/images/60x60.png'
import testImg from './../../assets/images/testimonial-icon.png'
import TestiItem from './tesItem'

function Testimonial() {
    return (
        <section className="section" id="testimonials">
            <div className="container">
                {/* <!-- ***** Section Title Start ***** --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">What do they say?</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Section Title End ***** --> */}

                <div className="row">
                    {/* <!-- ***** Testimonials Item Start ***** --> */}
                    <TestiItem
                        testImg={testImg}
                        desc="Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio."
                        usrImg={usrImg}
                        name="Catherine Soft"
                        dig="Managing Director"
                    />

                    <TestiItem
                        testImg={testImg}
                        desc="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
                        usrImg={usrImg}
                        name="Kelvin Wood"
                        dig="Digital Marketer"
                    />

                    <TestiItem
                        testImg={testImg}
                        desc="Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam."
                        usrImg={usrImg}
                        name="David Martin"
                        dig="Website Manager"
                    />

                    {/* <!-- ***** Testimonials Item End ***** --> */}
                </div>
            </div>
        </section>
    )
}

export default Testimonial