import React from 'react'

const ContactForm = () => {
    return (
        <div>


            <section className="section-map section-map-right">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=vitwo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                <div className="container desk_abs">
                    <div className="title">
                        <h2>Our contacts</h2>
                        <p>Information</p>
                    </div>
                    <ul className="text-list text-list-line">
                        <li><b>Address</b><hr /><p>139 Baker St, E1 7PT, London</p></li>
                        <li><b>Web</b><hr /><p>domain.com</p></li>
                        <li><b>Email</b><hr /><p>info@domain.com</p></li>
                        <li><b>Phone</b><hr /><p>(02) 123 456 789999</p></li>
                    </ul>
                    <hr className="space-sm" />
                    <div className="icon-links icon-social icon-links-grid social-colors">
                        <a className="facebook"><i className="fa-brands fa-facebook-f icon-facebook"></i></a>
                        <a className="twitter"><i className="fa-brands fa-twitter icon-twitter"></i></a>
                        <a className="instagram"><i className="fa-brands fa-instagram icon-instagram"></i></a>
                        <a className="pinterest"><i className="fa-brands fa-pinterest-p icon-pinterest"></i></a>
                    </div>
                </div>
            </section>



            <section className="section-base margin-buttom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title">
                                <h2>Contact us here</h2>
                                <p>Write us</p>
                            </div>
                            <form action="https://templates.themekit.dev/execoore/themekit/scripts/contact-form/contact-form.php" className="form-box form-ajax" method="post" data-email="example@domain.com">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>Name</p>
                                        <input id="name" name="name" placeholder="" type="text" className="input-text" required />
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Email</p>
                                        <input id="email" name="email" placeholder="" type="email" className="input-text" required />
                                    </div>
                                </div>
                                <p>Messagge</p>
                                <textarea id="messagge" name="messagge" className="input-textarea" placeholder="" required></textarea>
                                <button className="btn_style" type="submit">Send messagge</button>
                                <div className="success-box">
                                    <div className="alert alert-success">Congratulations. Your message has been sent successfully</div>
                                </div>
                                <div className="error-box">
                                    <div className="alert alert-warning">Error, please retry. Your message has not been sent</div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <hr className="space visible-md" />
                            <div className="title">
                                <h2>When are we open?</h2>
                                <p>Information</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                Utenim ad minim veniam quis nostrud exercitation ullama.
                            </p>
                            <table className="table table-border table-time">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Morning</th>
                                        <th>Afternoom</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Monday - Friday</td><td>8am - 12am</td><td>5pm - 9pm</td></tr>
                                    <tr><td>Saturday</td><td>Closed</td><td>5pm - 9pm</td></tr>
                                    <tr><td>Sunday</td><td>Closed</td><td>Closed</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
          


        </div>
    )
}

export default ContactForm;