"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function TestimoniaHomeOne() {
  return (
    <>
      <section className="testimonial-section testimonial-style1 section-padding">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="testimonial-thumbv1 w-100 wow fadeInDown" data-wow-delay=".4s">
                <img src="assets/img/testimonial/testimonial.png" alt="müşteri yorumları" className="w-100" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                <Swiper
                spaceBetween={2}
                loop={true}
                slidesPerView={1}
                speed={1300}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".cmn-prev2",
                  prevEl: ".cmn-next2",
                }}
                pagination={{
                  el: ".dot-cmn",
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
               
                 className="swiper testimonial-slidewrap01">
               
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img src="assets/img/icon/quote-left.svg" alt="alıntı ikonu" />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Baharat siparişlerimizi yıllardır bu firmadan veriyoruz. Ürünlerin tazeliği, kalitesi ve 
                          çeşitliliği gerçekten etkileyici. Özellikle özel karışımları çok beğeniyoruz. 
                          Restoranımızın lezzetine katkıları için teşekkür ederiz.
                        </p>
                        <div className="review-man">
                          <img src="assets/img/testimonial/re1.png" alt="müşteri" />
                          <div className="cont">
                            <h3>
                              Ahmet Yılmaz
                            </h3>
                            <span>
                              Restoran Sahibi
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img src="assets/img/icon/quote-left.svg" alt="alıntı ikonu" />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Profesyonel bir şef olarak kaliteli malzeme kullanmak benim için çok önemli. 
                          Bu baharat firmasının ürünleri her zaman taze ve yüksek kalitede. 
                          Özellikle egzotik baharatları bulmak konusunda bana çok yardımcı oluyorlar.
                        </p>
                        <div className="review-man">
                          <img src="assets/img/testimonial/re1.png" alt="müşteri" />
                          <div className="cont">
                            <h3>
                              Ayşe Demir
                            </h3>
                            <span>
                              Şef
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img src="assets/img/icon/quote-left.svg" alt="alıntı ikonu" />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Evde yemek yapmayı seven biri olarak, doğru baharatları bulmak her zaman zordu. 
                          Bu firma ile tanıştıktan sonra mutfağım tamamen değişti. Sundukları baharat 
                          çeşitleri ve önerileri sayesinde artık çok daha lezzetli yemekler yapıyorum.
                        </p>
                        <div className="review-man">
                          <img src="assets/img/testimonial/re1.png" alt="müşteri" />
                          <div className="cont">
                            <h3>
                              Mehmet Kaya
                            </h3>
                            <span>
                              Müşteri
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                
                </Swiper>
                <div className="dot-cmn"></div>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/flower-badge.png" alt="süsleme" className="flower-testimonial d-sm-block d-none" />
      </section>

    </>
  )
}