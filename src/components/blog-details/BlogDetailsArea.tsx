"use client"

import NiceSelect from '@/ui/NiceSelect'
import Link from 'next/link'
import React from 'react'

export default function BlogDetailsArea() {

  const selectHandler = (e: unknown) => { };

  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-post-details">
                <div className="explore-details-content">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Doğanın Güzelliklerini Keşfedin
                  </h2>
                  <ul className="comment-inner wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-folder-open"></i> Kategori</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-calendar-days"></i> 19 Ekim, 2024</a>
                    </li>
                  </ul>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock, 
                    Hampden-Sydney College Virginia'da Latin profesörü, daha az bilinen birini aradı.
                  </p>
                  <p className="mb-40 wow fadeInUp" data-wow-delay=".5">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock, 
                    Latin profesörü.
                  </p>
                  <div className="thumb w-100 mb-40 wow fadeInUp" data-wow-delay=".4s">
                    <img src="assets/img/blog/bd1.jpg" alt="img" className="w-100" />
                  </div>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".5s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock, 
                    Hampden-Sydney College Virginia'da Latin profesörü, daha az bilinen birini aradı.
                  </p>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".6s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock.
                  </p>
                  <div className="quote-box mb-40 wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/icon/quote-leftp2.svg" alt="img" />
                    <p>
                      Bir okuyucunun bir sayfanın okunabilir içeriğiyle dikkatinin dağılacağı uzun süredir bilinen bir gerçektir. 
                      Lorem Ipsum kullanmanın amacı, tasarımda daha normal bir harf dağılımına sahip olmasıdır.
                    </p>
                    <h5>
                      Skib Al sakin
                    </h5>
                  </div>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Boş Zamanınızı Boş Tutun!
                  </h3>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock, 
                    Latin profesörü.
                  </p>
                  <div className="blog-single-thumb mb-30 wow fadeInUp" data-wow-delay=".5s">
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single1.jpg" alt="img" className="w-100" />
                    </div>
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single2.jpg" alt="img" className="w-100" />
                    </div>
                  </div>
                  <p className="mb-20 wow fadeInUp" data-wow-delay=".3s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock, 
                    Latin profesörü.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock.
                  </p>
                </div>
                <div className="social-tag-wrapper wow fadeInUp" data-wow-delay=".4s">
                  <div className="left-tag">
                    <h5>
                      Etiketler:
                    </h5>
                    <ul className="tag-list">
                      <li>
                        <Link href="/blog-details">
                          Bakım
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          Güzellik
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          İyi
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="social-wrapper d-flex align-items-center">
                    <a href="#" className="white"><i className="white fa-brands fa-pinterest-p"></i></a>
                    <a href="#" className="white"><i className="white fa-brands fa-linkedin-in"></i></a>
                    <a href="#" className="white">
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                          fill="white" />
                      </svg>
                    </a>
                    <a href="#" className="white"><i className="white fab fa-facebook-f"></i></a>
                  </div>
                </div>
                <div className="component-arrows mt-40 mb-40 wow fadeInUp" data-wow-delay=".5s">
                  <div className="arrow-item">
                    <Link href="/blog-details" className="arrows">
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <h5>
                      Daha Fazla Bakım <br /> Yerleri
                    </h5>
                  </div>
                  <span className="cusline"></span>
                  <div className="arrow-item">
                    <h5 className="text-end">
                      Sanatı <br /> Ustalaştırmak
                    </h5>
                    <a href="#" className="arrows active">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="replay-single-box wow fadeInUp" data-wow-delay=".6s">
                  <img src="assets/img/blog/reply-kishan.png" alt="img" className="krishana" />
                  <div className="content">
                    <div className="man-info-area mb-20">
                      <div className="man-info">
                        <h3>
                          Kristin Watson
                        </h3>
                        <span>
                          23 Aralık, 2024 - 20:50
                        </span>
                      </div>
                      <button className="replys" type="button">
                        Yanıtla
                      </button>
                    </div>
                    <p>
                      Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                      tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski.
                    </p>
                  </div>
                </div>
                <div className="who-contact-wrap mt-60 mb-60 wow fadeInUp" data-wow-delay=".7s">
                  <h3 className="mb-40 text-capitalize">
                    Yorum Bırakın
                  </h3>
                  <form onSubmit={e => e.preventDefault()} className="row g-xl-4 g-3">
                    <div className="col-lg-6">
                      <input type="text" placeholder="İsim" />
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
                          { value: "01", text: "ABD" },
                          { value: "02", text: "İngiltere" },
                          { value: "04", text: "Türkiye" },
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
                      <button type="submit" className="cmn-btn">
                        Şimdi Gönder
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="maybe-liking wow fadeInUp" data-wow-delay=".8s">
                  <h3 className="mb-40">
                    İlginizi Çekebilir
                  </h3>
                  <div className="thumb mb-30">
                    <img src="assets/img/blog/bd2.jpg" alt="img" />
                  </div>
                  <h3 className="p900-clr mb-20">
                    Dış Mekanınızı Botanik Bir Alana Dönüştürün
                  </h3>
                  <p>
                    Lorem Ipsum'un sadece rastgele metin olmadığına dair yaygın inanışın aksine, 45 M.Ö. 
                    tarihli bir klasik Latin edebiyat parçasına dayanır ve 2000 yıldan daha eski. Richard McClintock.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-bar mt-lg-0 mt-4">
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".2s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Arama</h3>
                  </div>
                  <div className="search-widget" data-aos="zoom-in" data-aos-duration="1400">
                    <form onSubmit={e => e.preventDefault()}>
                      <input type="text" placeholder="Burada ara..." />
                      <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".3s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Kategoriler</h3>
                  </div>
                  <div className="category" data-aos="fade-down" data-aos-duration="1600">
                    <ul className="d-grid gap-xxl-3 gap-3">
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Evergreen Çim Bakımı
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Petal Mükemmel Tarım
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Mutlu Botanikler
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Çiftlik Uzmanı
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Sakin Peyzaj Tasarımı
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".4s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Son Bloglar</h3>
                  </div>
                  <div className="recent-postwrap">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small1.png" alt="img" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 10 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Yenilik Tohumlarını Ekme
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small2.png" alt="img" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 10 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Tarımın Potansiyelini Keşfet
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small13.png" alt="img" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 10 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Tarımla Hayatınızı Besleyin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".5s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Etiketler</h3>
                  </div>
                  <div className="tagwrap">
                    <Link href="/blog-details">CropCare Pro</Link>
                    <Link href="/blog-details">Çiçekler</Link>
                    <Link href="/blog-details">Çiftlik</Link>
                    <Link href="/blog-details">Uyum</Link>
                    <Link href="/blog-details">Doğa</Link>
                    <Link href="/blog-details">Yeşil</Link>
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