import Link from 'next/link'
import React from 'react'

export default function FooterTwo() {
  return (
    <>
      <footer className="footer-section overflow-hidden position-relative footer-style3">
        <div className="footer-widgets-wrapper footer-widget-wrapperv03">
          <div className="container">
            <div className="row g-3 g-md-4 g-4 justify-content-between">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/" className="footer-logo">
                      <img src="assets/img/logo/logo-light.png" alt="logo-görseli" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      En kaliteli baharatları dünyanın <br /> dört bir yanından sizin için özenle seçiyoruz
                    </p>
                    <div className="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" className="white-clr"><i className="white-clr fab fa-facebook-f"></i></a>
                      <a href="#" className="white-clr">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                            fill="white-clr" />
                        </svg>
                      </a>
                      <a href="#" className="white-clr"><i className="white-clr fa-brands fa-linkedin-in"></i></a>
                      <a href="#" className="white-clr"><i className="white-clr fa-brands fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Hizmetlerimiz</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Hizmetlerimiz
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Blog ve Haberler
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">İletişim</h3>
                  </div>
                  <ul className="list-area list-contact">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        info@baharatdunyasi.com
                      </a>
                    </li>
                    <li>
                      <a href="info@baharatdunyasi.com" className="link">
                        <i className="fa-solid fa-location-dot"></i>
                        Baharat Sokak No:5, <br /> İstanbul, Türkiye
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fa-solid fa-phone"></i>
                        (0212) 555 55 55 <br />
                        (0533) 555 55 55
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Galeri</h3>
                  </div>
                  <div className="latest-thumwrap">
                    <img src="assets/img/footer/ln1.png" alt="baharat görseli" />
                    <img src="assets/img/footer/ln2.png" alt="baharat görseli" />
                    <img src="assets/img/footer/ln3.png" alt="baharat görseli" />
                    <img src="assets/img/footer/ln4.png" alt="baharat görseli" />
                    <img src="assets/img/footer/ln5.png" alt="baharat görseli" />
                    <img src="assets/img/footer/ln6.png" alt="baharat görseli" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div
              className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © baharatdunyasi.com {new Date().getFullYear()}. Tüm Hakları Saklıdır
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">
                    Kullanım Koşulları
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}