import wpimg from './../../assets/images/work-process-item-01.png'
import MiniBox from './minibox'

function Parallax() {
    return (
        <section className="mini" id="work-process">
            <div className="mini-content">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="info">
                                <h1>Work Process</h1>
                                <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ***** Mini Box Start ***** --> */}
                    <div className="row">
                        <MiniBox img={wpimg} title="Get Ideas" desc="Godard pabst prism fam cliche." />
                        <MiniBox img={wpimg} title="Sketch Up" desc="Godard pabst prism fam cliche." />
                        <MiniBox img={wpimg} title="Discuss" desc="Godard pabst prism fam cliche." />
                        <MiniBox img={wpimg} title="Revise" desc="Godard pabst prism fam cliche." />
                        <MiniBox img={wpimg} title="Approve" desc="Godard pabst prism fam cliche." />
                        <MiniBox img={wpimg} title="Launch" desc="Godard pabst prism fam cliche." />

                    </div>
                    {/* <!-- ***** Mini Box End ***** --> */}
                </div>
            </div>
        </section>
    )
}

export default Parallax