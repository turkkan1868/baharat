"use client"
import NiceSelect from '@/ui/NiceSelect'
import Link from 'next/link';
import React from 'react'

export default function CtaHomeOne() {

  // const selectHandler = (e: any) => { };
  const selectHandler = (e: unknown) => { };

  return (
    <>
      <section className="who-section overflow-hidden p900-bg section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="section-title mb-40">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">Biz Kimiz</h5>
                <h2 className="wow fadeInDown white-clr mb-24" data-wow-delay=".3s">Doğanın lezzetlerini sofranıza taşıyoruz</h2>
                <p className="white-clr wow fadeInDown" data-wow-delay=".4s">Baharatlar, yemeklere lezzet katmanın yanı sıra sağlık açısından da birçok fayda sağlar. Biz en kaliteli baharatları dünyanın dört bir yanından sizin için özenle seçiyoruz.</p>
              </div>
              <div className="row g-xl-6 g-4">
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/hand-planp900.svg" alt="ikon" />
                    </div>
                    <Link href="/about" className="title">Kaliteli <br /> Baharatlar</Link>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/wheath-p900.svg" alt="ikon" />
                    </div>
                    <Link href="/about" className="title">Doğal <br /> Lezzetler</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-contact-wrap">
                <h3 className="white-clr">Mesaj Bırakın</h3>
                <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Adınız" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="E-posta" />
                  </div>
                  <div className="col-lg-6">
                    <input type="number" placeholder="Telefon Numaranız" />
                  </div>
                  <div className="col-lg-6">
                    <NiceSelect
                      options={[
                        { value: "00", text: "Bölgeniz" },
                        { value: "01", text: "İstanbul" },
                        { value: "02", text: "Ankara" },
                        { value: "03", text: "İzmir" },
                        { value: "04", text: "Türkiye Geneli" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      placeholder="Bir seçenek seçin"
                      name="myNiceSelect"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea name="message" rows={4} placeholder="Mesajınız"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="cmn-btn cmn-primary2 text-capitalize">Gönder</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/who-element.png" alt="süsleme" className="who-element" />
      </section>
    </>
  )
}