"use client"
import Link from 'next/link'
import React from 'react'

export default function BlogArea() {
  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-big pe-xl-2">
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".2s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big01.jpg" alt="baharat blog görseli" />
                    <span className="date-badge">
                      22 Oca
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Yorumlar (05)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Baharatların Sağlık Üzerindeki Etkileri
                    </Link>
                    <p>
                      Baharatlar sadece yemeklere lezzet katmakla kalmaz, aynı zamanda sağlığımız için de birçok fayda sağlar. 
                      Özellikle zerdeçal, tarçın ve karabiber gibi baharatlar, antioksidan özellikleri sayesinde bağışıklık 
                      sistemimizi güçlendirir ve çeşitli hastalıklara karşı koruma sağlar.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".3s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big02.jpg" alt="baharat blog görseli" />
                    <span className="date-badge">
                      15 Oca
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Yorumlar (03)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Dünya Mutfaklarında Baharat Kullanımı
                    </Link>
                    <p>
                      Her kültürün mutfağında baharatlar önemli bir yer tutar. Hint mutfağında köri ve zerdeçal, 
                      Meksika mutfağında acı biber ve kimyon, Türk mutfağında ise sumak ve pul biber vazgeçilmez 
                      baharatlardandır. Farklı kültürlerin baharat kullanımlarını keşfedin.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".4s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big03.jpg" alt="baharat blog görseli" />
                    <span className="date-badge">
                      10 Oca
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Yorumlar (07)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Baharatların Doğru Saklanması
                    </Link>
                    <p>
                      Baharatların tazeliğini ve aromasını korumak için doğru saklama koşulları çok önemlidir. 
                      Güneş ışığından uzak, serin ve kuru bir ortamda, hava geçirmeyen kavanozlarda saklanmalıdır. 
                      Baharatlarınızın ömrünü uzatmak için pratik saklama önerileri.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".5s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big04.jpg" alt="baharat blog görseli" />
                    <span className="date-badge">
                      05 Oca
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Yorumlar (04)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Baharat Karışımları Nasıl Hazırlanır?
                    </Link>
                    <p>
                      Kendi baharat karışımlarınızı hazırlamak hem ekonomik hem de daha lezzetli sonuçlar verir. 
                      Garam masala, ras el hanout, za'atar gibi popüler baharat karışımlarını evde nasıl 
                      hazırlayabileceğinizi öğrenin ve mutfağınızda farklı lezzetler yaratın.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".6s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big05.jpg" alt="baharat blog görseli" />
                    <span className="date-badge">
                      01 Oca
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Yorumlar (02)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> Admin</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Organik Baharat Üretiminin Önemi
                    </Link>
                    <p>
                      Organik baharat üretimi, hem çevre sağlığı hem de insan sağlığı açısından büyük önem taşır. 
                      Kimyasal ilaç ve gübre kullanılmadan yetiştirilen organik baharatlar, daha yoğun aromaya sahiptir 
                      ve sağlık açısından daha güvenlidir.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Arama yapın..." />
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
                          <i className="fa-solid fa-minus"></i>Baharat Tarifleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Sağlık ve Baharatlar
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Dünya Mutfakları
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Baharat Üretimi
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Organik Baharatlar
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".4s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Son Yazılar</h3>
                  </div>
                  <div className="recent-postwrap">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small1.png" alt="baharat görseli" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 10 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Baharatların Mutfaktaki Sırları
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small2.png" alt="baharat görseli" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 5 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Baharat Seçiminde Dikkat Edilmesi Gerekenler
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small13.png" alt="baharat görseli" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> 1 Ocak, 2024
                        </span>
                        <Link href="/blog-details">
                          Yeni Yılda Mutfağınızı Baharatlarla Canlandırın
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
                    <Link href="/blog-details">Karabiber</Link>
                    <Link href="/blog-details">Tarçın</Link>
                    <Link href="/blog-details">Kimyon</Link>
                    <Link href="/blog-details">Zerdeçal</Link>
                    <Link href="/blog-details">Organik</Link>
                    <Link href="/blog-details">Sağlık</Link>
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