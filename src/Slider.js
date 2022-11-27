import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


// import required modules
import { Autoplay, Pagination} from 'swiper'

const Slider = () => {
 const pagination = {
   clickable: true,
   renderBullet: function (index, className) {
     return '<span class="' + className + '">' + (index + 1) + '</span>'
   },
 }
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/-OjLv6nmVQji8UwaBggmEQ/zhjTC932N7Zn8BNBvud3G7mpeWZbHPkw_Q0xt1Kp9koWsbPJPSZzg5yNwXM8cybFNguRUULfV179OHe7J7WGIE3PhylP4chepzX3sde0Ibw/7wgpOj-05Hqk_T4KPg7i3DqybJOF6igh0NHmMsjjW9Y'
            alt=''
          />
          <h3>poulet</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/umhncgAw_Z90ePopWMdQhg/nptem2L8tcgA6nC0SiO0ZmrtxFIM323sklWXhtNB9nCAg8CgOXLYc7HktysGTGavkDFEJ91AhRc5HbZwgwL_3A/bGY26QNzHQJavH24NHhlRF96XPCB5Msb-xNOE63U3Ig'
            alt=''
          />
          <h3>pigeon</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/BocfoAiaavJl8cAw3GI-JA/fVdHS4kbQh5m_yJ2iInGz3QGXAanMQwoFsLGidFecEx2iCu2uJlgXIe0MaWYXGCdT-RDzE10EsNYabIkX9SqOQ/__8JNUZimmT8DqIVxLPGqq0q4B_9GXBe64hetNDIpSk'
            alt=''
          />
          <h3>dindes</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/cjmgQtr-sFSaO375beWYzA/yZYsMDzV9pXD8yxCpJwfdxx2O-H5ne-kKIt5NpoRpVQyZzmDa5WIoKYvVR6zR7CUY8uvfwFJAP-LnPfLl2vFUru3cFtwSR8gN3rgeyOgX8E/iaGUG8Ewqee4lAyrxb9OhHKgZ4Vz13BYWuHzs5xmEMc'
            alt=''
          />
          <h3>pintades</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/mz9Uexcurs39RQaMAQzV0Q/skHmEq6TNegluScF2A7nTvsBIU2iBYCPe0_l2JrNq4uXfJhyKdDPwAFgBVjygZL531jAyB0Uhsw5rF0oacNXiqAHlV5GuDKrUKcEaRUdMv0/MIptQYB0zB19hv1A9JwIP9jUZNAXQ4Vk9JCkg9t9QK8'
            alt=''
          />
          <h3>lapin</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/hLQp-iQpaaZE-Kw5hgmXiw/gfMlMpN9o6NrPGWWulIpSoyJrby8cxTloyLbCWZQNvIRn7zzTsoRT4W_Z7vaZRnlMkSsrHXoWwL8Q1TJWaXW3A/Jl8MSjTScW4kz-fo-_2AbFFL3VUIRvN-AFSd1ubBZ5s'
            alt=''
          />
          <h3>chevre</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/rBodo3WuMt3-2uNeHH7w1A/oGAqV_iYJBeJ44EkmZDUrhmIJxBNJzdTCiHz0eVk9R4Lk7XoJxqxp3MkRjsqfePwLgoCbUtq2bcwEcwQ53yTjg/6xKCm75by0RGq6gqR5EvIEQAR2lObUH-xc4CM-Mo2Q8'
            alt=''
          />
          <h3>chevre</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://v5.airtableusercontent.com/v1/11/11/1670457600000/QvAET18im6o9NRs6v-zd2g/VcrCNfiAk_274QYe_ODk-aMX26ATS6_d5Gnbyss_ak2nR_xgWb6e3hIDGc1ymmbEkBPdFUa8MVIXAXi6YdZbtQ/er28dgyO5Qo3dp_ekNykmmYv_3upi3ur4khl_RTxA04'
            alt=''
          />
          <h3>mouton</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
