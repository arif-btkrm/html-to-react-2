import biimg1 from './../../assets/images/blog-item-01.png'
import biimg2 from './../../assets/images/blog-item-02.png'
import biimg3 from './../../assets/images/blog-item-03.png'
import BlogItem from './blogItem'

function Blog(){
    return(
        <section className="section" id="blog">
        <div className="container">
            {/* <!-- ***** Section Title Start ***** --> */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Blog Entries</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Section Title End ***** --> */}

            <div className="row">

                <BlogItem
                    id="1"
                    img = {biimg1}
                    title = "Vivamus ac vehicula dui"
                    body = "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue."
                />
                
                <BlogItem
                    id="2"
                    img = {biimg2}
                    title = "Phasellus convallis augue"
                    body = "Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis."
                />
                
                <BlogItem
                    id="3"
                    img = {biimg3}
                    title = "Nam gravida purus non"
                    body = "Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu."
                />
                
            </div>
        </div>
    </section>
    )
}

export default Blog