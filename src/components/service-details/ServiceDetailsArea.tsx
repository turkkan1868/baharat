"use client"
import React, { useState } from 'react'

const accordioa_data = [
  {
    id: 1,
    title: 'Karabiber Çeşitleri',
    description: 'Siyah, beyaz ve yeşil karabiber çeşitlerimiz bulunmaktadır.',
  },
  {
    id: 2,
    title: 'Kullanım Alanları',
    description: 'Et yemekleri, çorbalar ve soslar için idealdir.',
  },
  {
    id: 3,
    title: 'Saklama Koşulları',
    description: 'Serin, kuru ve güneş almayan bir ortamda saklanmalıdır.',
  },
  {
    id: 4,
    title: 'Besin Değerleri',
    description: 'Antioksidan bakımından zengin, sindirime yardımcı olur.',
  },
  {
    id: 5,
    title: 'Sipariş Bilgileri',
    description: 'Toptan ve perakende siparişleriniz için iletişime geçebilirsiniz.',
  },
]

export default function ServiceDetailsArea() {

  const [isOpen, setIsOpen] = useState(0);
  
  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  }


  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4">
              <div className="service-details-left">
                <div className="tab-faq faq mb-40 wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    {accordioa_data.map((item, i) => (
                      <div key={i} className={`accordion-single ${isOpen === i ? "active" : ""}`}>
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button">
                            {item.title}
                          </button>
                        </h5>
                        <div className="content-area" style={{ display: isOpen === i ? "block" : "none" }}>
                          <div className="content-body">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
                <div className="service-bambo-box wow fadeInUp" data-wow-delay=".4s">
                  <h3 className="text-uppercase">
                    İLETİŞİM
                  </h3>
                  <span className="fast">
                    Hızlı sipariş için
                  </span>
                  <a href="#" className="call">
                    <span className="call-icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    (0212) 555 55 55
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/service/service-single2.jpg" alt="karabiber görseli" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>
                    Karabiber - Mutfağınızın Vazgeçilmez Lezzeti
                  </h3>
                  <p>
                    Karabiber, dünya mutfaklarının en yaygın kullanılan baharatlarından biridir. Keskin ve aromatik tadıyla 
                    yemeklerinize derinlik katar. Taze öğütülmüş karabiber, hazır öğütülmüş olanlara göre çok daha 
                    yoğun bir aromaya sahiptir. Özenle seçilmiş, kaliteli karabiber tanelerimiz, mutfağınızda 
                    fark yaratacak.
                  </p>
                </div>
                <div className="working-process-details">
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".4s">
                    <h3 className="white-clr">
                      Doğal <br /> Üretim
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-desert.svg" alt="ikon" />
                    </div>
                  </div>
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".5s">
                    <h3 className="white-clr">
                      Taze <br /> Öğütme
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-flower.svg" alt="ikon" />
                    </div>
                  </div>
                </div>
                <div className="cont-box mb-40 wow fadeInUp" data-wow-delay=".6s">
                  <h3>
                    Karabiberin Faydaları
                  </h3>
                  <p>
                    Karabiber sadece lezzetli değil, aynı zamanda sağlık açısından da faydalıdır. İçerdiği 
                    piperin maddesi sayesinde sindirime yardımcı olur ve metabolizmayı hızlandırır. 
                    Antioksidan özellikleri sayesinde bağışıklık sistemini güçlendirir. Ayrıca, 
                    karabiberin öksürük ve soğuk algınlığı semptomlarını hafiflettiği de bilinmektedir.
                  </p>
                </div>
                <div className="service-single-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/service/service-details-big.jpg" alt="karabiber görseli" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                    <img src="assets/img/service/service-single1.jpg" alt="karabiber görseli" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}