import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, User, Telescope, Search, Flame, Timer, Brain, Wifi } from 'lucide-react'
import './Landing.css'


export default function Landing() {

  useEffect(() => {
    document.body.classList.add('cnplf')
  }, [])

  return (
    <>
      <div class="dir cnplf" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="0">
        <div class="chip0 cbk2v cuk8q clv5h  cz8nf c9loe cum4w cwh80">

          <header class="c307p cvtc3 c0ayg">
            <div class="cbl28 c0g2c coaq6 cb0ik">
              <div class="chip0 cglp6 c4mnq cd10w cdoit fexample">

                <div class="cosxg cveoo">
                  <a class="cprq6" href="index.html" aria-label="Cruip">
                    <svg class="cxofs cnujf" viewBox="0 0 32 32">
                      <defs>
                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                          gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                          id="logo1-b">
                          <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%"></stop>
                          <stop stop-color="#F472B6" stop-opacity=".876" offset="100%"></stop>
                        </radialGradient>
                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                          gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                          id="logo1-d">
                          <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%"></stop>
                          <stop stop-color="#D375C2" stop-opacity=".833" offset="50.358%"></stop>
                          <stop stop-color="#FBCFE8" stop-opacity=".876" offset="100%"></stop>
                        </radialGradient>
                        <path
                          d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z"
                          id="logo1-a"></path>
                        <path
                          d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z"
                          id="logo1-c"></path>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)"
                          href="#logo1-a"></use>
                        <use fill="url(#logo1-d)" opacity=".961" href="#logo1-c"></use>
                      </g>
                    </svg>
                  </a>
                </div>

                <nav class="chip0 cxgjn">

                  <ul class="chip0 cxgjn cutr6 c4mnq cbv5p">
                    <li className='c8h5l'>
                      <a class="sm:!px-4 !px-2 chip0 c4mnq c5mpl chs2t cazq3 ckdyj cdm1x c6m7s ckwz7 cysah cua40 make-btn"
                        href="#">
                        <p className='txt-margin !text-[11.1px] sm:!text-[18px] '> ساخت اکانت  </p>
                        <User />
                      </a>
                    </li>
                    <li class="c8h5l flex items-center">
                      <a class="sm:!px-4 !px-2 !text-[11.2px] sm:!text-[18px] c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#">
                        ورود به اکانت <span class="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x"><LogIn /></span>
                      </a>
                    </li>
                  </ul>

                </nav>

              </div>
            </div>
          </header>

          <main className="cxgjn">
            {/* Hero */}
            <section className="c8a4e clv5h">
              {/* Bg gradient */}
              <div className="c5sfa c307p c8igq cpg49 c5n0y cavhb cigfq c4wey ckoll cn6f7 cma1x" aria-hidden="true">
              </div>
              {/* Illustration */}
              <div className="c5sfa c307p c1sv4 cavhb cnmzr" aria-hidden="true">
                <img src="https://preview.cruip.com/neon/images/hero-illustration.svg" className="cy2lr" width={2143} height={737} alt="Hero Illustration" />
              </div>
              <div className="c8a4e cbl28 c0g2c coaq6 cb0ik">
                <div className="cv5m6 czfa1 cg2ig c2e3f">
                  {/* Hero content */}
                  <div className="cbl28 czcad ckxd8 c4qns czwux cohxx">
                    <div data-aos="zoom-out" className="aos-init aos-animate">
                      <div className="c8a4e ciljg cmgtq czrr8 c4a1n coaq6 cld06 cimbm clnec cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                        <div className="flex gap-1.5 ckdyj items-center">
                          <Link className="hover:text-blue-300 cpfyo c4mnq cazq3 ce7rf cdm1x c6m7s ckwz7 c76qn" to="/about">
                            درباره ما
                            بیشتر بدانید
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h1 className="sm:!text-7xl !text-[30px] cx0om ciljg cejd3 aos-init aos-animate" data-aos="zoom-out" data-aos-delay={100}>
                      پلتفرم آموزش ریاضی
                    </h1>
                    <p className="cyl8w cbqc4 ckdyj aos-init aos-animate" data-aos="zoom-out" data-aos-delay={200}>
                      .نرم افزار کوییز ریاضی، یک نرم افزار لورم ایپسوم متن تستی است
                    </p>
                    <div className="cbl28 cn9oi cu0vn cdjip c4t8e c9mpo cvuia cqmlm cjwgj aos-init aos-animate" data-aos="zoom-out" data-aos-delay={300}>
                      <div>
                        <Link className="gap-[2px] cxykh c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" to="/select">
                          <Flame />
                          <p>!بزن بریم برای اولین آزمون</p>
                        </Link>
                      </div>
                      <div>
                        <a className="flex gap-1.5 cxykh c0ayg c4wey ckoll c2xk9 clnec cxmkl crzek" href="#">
                          <Search />
                          <p>در مقالات کاوش کنید </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Press logos */}
            <section>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                <div className="c25y8 cydxx ckewl">
                </div>
              </div>
            </section>
            {/* Features */}
            <section>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                <div className="cyo0e c2n62">
                  {/* Section header */}
                  <div className="czfa1 ckxd8 c2e3f">
                    <h2 className="c4cmz cejd3 aos-init aos-animate" data-aos="zoom-out">
                      بر روی مسئله ها تمرکز کنید
                    </h2>
                  </div>
                  <div className="c2to7 aos-init aos-animate" data-aos="zoom-out">
                    <img src="./images/image.png" width={1104} height={512} alt="Features" />
                  </div>
                  {/* Items */}
                  <div className="cbl28 c8bbi c4ebt c4v1u cpkit cckpn ct4ea c5a57">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                        <Timer className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-white text-xl font-semibold mb-2">حواست به زمان باشه</h2>
                      <p className="text-gray-400">
                        هر آزمون زمان مشخصی داره، قبل از شروع آزمون بهش دقت کن
                      </p>
                    </div>

                    {/* Second Card */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-white text-xl font-semibold mb-2">!خیلی تمرکز کن</h2>
                      <p className="text-gray-400">
                        خیلی از سوالات نکات ریزی دارن، پس با تمرکز برو سراغ حل سوالات
                      </p>
                    </div>

                    {/* Third Card */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                        <Wifi className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-white text-xl font-semibold mb-2">از وصل بودن به اینترنت مطمئن باش</h2>
                      <p className="text-gray-400">
                        اختلال توی اینترنت ممکنه توی فرآیند آزمون مشکلاتی به وجود بیاره
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Features #2 */}
            <section className="c8a4e">
              {/* Bg gradient */}
              <div className="c5sfa c307p cpg49 c5n0y cqa37 cavhb cigfq cltl0 ckoll cn6f7 cma1x" aria-hidden="true">
              </div>
              {/* Bg illustration */}
              <div className="c307p c1sv4 cqa37 cavhb ck5f6" aria-hidden="true">
                <img src="https://preview.cruip.com/neon/images/features-illustration.svg" className="cy2lr" width={608} height={305} alt="Illustration" />
              </div>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                <div className="cyo0e c2n62">
                  {/* Section header */}
                  <div className="cbl28 cqg01 czfa1 ckxd8 c2e3f">
                    <h2 className="c4cmz cvx4v cejd3">Use sensitive data without sacrificing privacy</h2>
                    <div className="cbl28 cms5w">
                      <p className="cbqc4 ckdyj">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui
                        officia deserunt mollit anim id est.</p>
                    </div>
                  </div>
                  {/* Section content */}
                  <div className="xl:space-x-18 cbl28 chip0 czcad cuk8q cc36m cq0c0 cckpn cmmfs cy3qu c5l51 c40z8 cbb29">
                    {/* Content */}
                    <div className="cs4o7 cm9ng cphra c6ovz aos-init aos-animate" data-aos="zoom-out" data-aos-delay={200}>
                      <div className="ckxd8 cohxx">
                        <h3 className="ci6dt cvx4v cejd3 c6shg">:برخی مزایای استفاده از این پلتفرم</h3>
                        <p className="ciljg cbqc4 ckdyj">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است که بدانند.
                        </p>
                        <ul className="cpfyo cuk8q ch3s0 cblub ckdyj">
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>طراحی مناسب سوالات</span>
                          </li>
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>سطح بندی سوالات در سه سطح متفاوت</span>
                          </li>
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>قابلیت مشاهده کارنامه خود</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="ciy0g c6ovz aos-init aos-animate" data-aos="zoom-out">
                      <img className="cbl28 cckpn" src="./images/codes.png" width={540} height={581} alt="Features" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pricing */}
            <section className="c8a4e">
              {/* Illustration */}
              <div className="c5sfa c307p c8igq c1sv4 cavhb c7z7s cnmzr cvu0u" aria-hidden="true">
                <img src="https://preview.cruip.com/neon/images/features-illustration.svg" className="cy2lr" width={618} height={468} alt="Pricing Illustration" />
              </div>



            </section>
          </main>

          {/* footer */}
          <footer>
            <div class="flex flex-wrap items-center md:justify-between justify-center w-full bg-gray-800 py-5">
              <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 py-1">
                  Copyright © <span id="get-current-year">2025</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> MathYar Created By Dev Mani
                  </a>
                  {/* <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>. */}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
