import Link from 'next/link'
import React from 'react'

export default function AboutHomeOne() {
  return (
    <>
      <section className="about-section style-v01 section-padding white-bg">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div className="about-thumv01 position-relative">
                <img src="assets/img/about/choose-man.png" alt="baharat uzmanı" className="mimg" />
                <img src="assets/img/about/f-food.png" alt="baharat" className="f-food" />
                <img src="assets/img/about/l-food.png" alt="baharat" className="l-food wow fadeInLeft" data-wow-delay=".5s" />
                <img src="assets/img/about/t-food.png" alt="baharat" className="t-food wow fadeInLeft" data-wow-delay=".7s" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Neden Bizi Seçmelisiniz
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Doğanın lezzetlerini sofranıza taşıyoruz
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Baharatlar, yemeklere lezzet katmanın yanı sıra sağlık açısından da birçok fayda sağlar. 
                    Biz en kaliteli baharatları dünyanın dört bir yanından sizin için özenle seçiyoruz.
                  </p>
                  <div className="progress_bar d-grid gap-xxl-4 gap-4">
                    <div className="progress_bar_item">
                      <div className="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "70%" }}>
                        <div className="item_label p900-clr">Saf ve Organik</div>
                        <div className="item_value p900-clr">70%</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="70"></div>
                      </div>
                    </div>
                    <div className="progress_bar_item">
                      <div className="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "80%" }}>
                        <div className="item_label p900-clr">Doğal Lezzet</div>
                        <div className="item_value p900-clr">80%</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="80"></div>
                      </div>
                    </div>
                  </div>
                  <Link href="/about" className="cmn-btn round100 cmn-primary2">
                    Daha Fazla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}