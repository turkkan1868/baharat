import Link from 'next/link'
import React from 'react'

export default function FeatureHomeThree() {
  return (
    <>
      <section className="feature-sectionv02 p900-bg space-top">
        <div className="container">
          <div className="row g-4 align-items-lg-start align-items-center justify-content-center">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-10">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s">
                    ÖZELLİKLERİMİZ
                  </h5>
                  <h2 className="text-white mb-24 wow fadeInDown" data-wow-delay=".3s">
                    Doğal lezzetler, sofranıza taşınan baharatlar
                  </h2>
                  <p className="text-white wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    En kaliteli baharatları dünyanın dört bir yanından sizin için özenle seçiyoruz. 
                    Taze ve doğal ürünlerimizle mutfağınıza lezzet katıyoruz.
                  </p>
                  <ul className="about-list2 mb-40 gap-2">
                    <li className="text-white"><i className="fa-solid fa-check"></i> Taze ve Doğal Baharatlar</li>
                    <li className="text-white"><i className="fa-solid fa-check"></i> Özel Baharat Karışımları
                    </li>
                    <li className="text-white"><i className="fa-solid fa-check"></i> Dünya Mutfaklarından Egzotik Çeşitler</li>
                  </ul>
                  <Link href="/service" className="cmn-btn text-white primary-border">
                    Daha Fazla
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-8 ps-lg-5">
              <div className="feature-thumv02 position-relative w-100 wow fadeInDown" data-wow-delay=".3s">
                <img src="assets/img/about/feature-thumb2.png" alt="baharat görseli" className="w-100" />
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/feature-green2.png" alt="süsleme" className="feature-element2" />
      </section>
    </>
  )
}