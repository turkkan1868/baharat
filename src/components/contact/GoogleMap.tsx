import React from 'react'

export default function GoogleMap() {
  return (
    <>
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101511.91554163197!2d32.41977535!3d37.87455985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d615f745%3A0x240dd0fc08060967!2sKonya%20Merkez%2C%20Konya%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1717004161632!5m2!1str!2str"
          allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}