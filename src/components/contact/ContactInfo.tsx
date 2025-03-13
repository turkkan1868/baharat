import React from 'react'

export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Adres
                  </h5>
                  <a href="#" className="pra">
                    İstanbul, Fatih <br /> Mısır Çarşısı No: 45
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Bizi Arayın
                  </h5>
                  <a href="#" className="pra">
                    Telefon: +90 212 555 66 77 <br />
                    Faks: +90 212 555 66 78
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    E-posta Gönderin
                  </h5>
                  <a href="#" className="pra">
                    info@baharat.com <br />
                    satis@baharat.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}