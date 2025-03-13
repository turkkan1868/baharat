"use client"
import React from 'react'

export default function SubscribeHomeThree() {
  return (
    <>
      <div className="subscrbie-section subscrbie-stylev03">
        <div className="container">
          <div className="subscribe-wrapper-v03">
            <div className="container position-relative">
              <div className="row g-4 align-items-end justify-content-between">
                <div className="col-lg-6 col-md-6 mb-xl-5 pb-xl-4">
                  <div className="get-element">
                    <img src="assets/img/element/get-element.png" alt="süsleme" className="d-md-block d-none" />
                  </div>
                  <div className="subs-contentv3">
                    <h2>
                      Güncel Kalın <span>Abone Olun</span> <br /> Bültenimize
                    </h2>
                    <form onSubmit={(e) => e.preventDefault()} className="subscribe-form03 flex-xl-nowrap flex-wrap">
                      <input type="text" placeholder="E-posta Adresiniz" />
                      <button type="submit" className="cmn-btn text-capitalize">
                        Abone Ol
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="conatact-box common-contact-inner position-relative">
                    <div className="section-title mb-40">
                      <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                        İletişim
                      </h5>
                      <h2>
                        Bizimle İletişime Geçin
                      </h2>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Adınız" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="E-posta" />
                      </div>
                      <div className="col-lg-12">
                        <input type="text" placeholder="Konu" />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Mesajınız"></textarea>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="cmn-btn text-capitalize">
                          Gönder
                        </button>
                      </div>
                    </form>

                    <img src="assets/img/element/sun-element.png" alt="süsleme"
                      className="sun-element d-xl-block d-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}