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
                    <h1 className="cx0om ciljg cejd3 aos-init aos-animate" data-aos="zoom-out" data-aos-delay={100}>
                      جایی که آزمون میدهید  نرم افزار</h1>
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
                        <h3 className="ci6dt cvx4v cejd3 c6shg">Standardized dev environments</h3>
                        <p className="ciljg cbqc4 ckdyj">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className="cpfyo cuk8q ch3s0 cblub ckdyj">
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>Performance reviews</span>
                          </li>
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>Objectives and goal setting</span>
                          </li>
                          <li className="chip0 c4mnq">
                            <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                              </path>
                            </svg>
                            <span>Manager check-ins</span>
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
                <img src="./images/pricing-illustration.svg" className="cy2lr" width={618} height={468} alt="Pricing Illustration" />
              </div>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                <div className="c0lzx cydxx cyo0e c2n62">
                  {/* Section header */}
                  <div className="cbl28 cqg01 czfa1 ckxd8 c2e3f">
                    <h2 className="c4cmz cvx4v cejd3">Find a plan that's right for you</h2>
                    <div className="cbl28 cms5w">
                      <p className="cbqc4 ckdyj">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui
                        officia deserunt mollit anim id est.</p>
                    </div>
                  </div>
                  {/* Pricing tables */}
                  <div className="cbl28 c8bbi c4ebt c4v1u cpkit cv4kj cknzv cx98a cbk2l">
                    {/* Pricing table 1 */}
                    <div className="c8a4e chip0 csakt cuk8q cz5m3 aos-init aos-animate" data-aos="zoom-out">
                      <div className="ciljg">
                        <div className="ch741 cblub cdur3">Starter</div>
                        <div className="c6u0s cpfyo c6nex cejd3">
                          <span className="ch05i cazq3 ckdyj">$</span>
                          <span className="c6shg c4bs9 c06qx">49</span>
                          <span className="cazq3 ckdyj">/mo</span>
                        </div>
                        <div className="ciljg ckdyj">For teams building apps for many public &amp; private
                          users.</div>
                        <a className="c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#0">
                          Start Free Trial <span className="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x">-&gt;</span>
                        </a>
                      </div>
                      <div className="cvx4v cazq3">Features include:</div>
                      <ul className="cxgjn ch3s0 ckdyj">
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Unlimited placeholder texts</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Consectetur adipiscing elit</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Excepteur sint occaecat cupidatat</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Officia deserunt mollit anim</span>
                        </li>
                      </ul>
                    </div>
                    {/* Pricing table 2 */}
                    <div className="c8a4e chip0 csakt cuk8q c4a1n cz5m3 aos-init aos-animate" data-aos="zoom-out" data-aos-delay={100}>
                      <div className="c307p c5n0y cqa37 c75iz cjdk8">
                        <div className="cpfyo c4mnq czrr8 cdjvi c5mpl cld06 cimbm cdur3 cuzn3">
                          <svg className="cjxzk c48lf" width={12} height={14} xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z">
                            </path>
                          </svg>
                          <span>Most Popular</span>
                        </div>
                      </div>
                      <div className="ciljg">
                        <div className="ch741 cblub cdur3">Business</div>
                        <div className="c6u0s cpfyo c6nex cejd3">
                          <span className="ch05i cazq3 ckdyj">$</span>
                          <span className="c6shg c4bs9 c06qx">79</span>
                          <span className="cazq3 ckdyj">/mo</span>
                        </div>
                        <div className="ciljg ckdyj">For teams building apps for many public &amp; private
                          users.</div>
                        <a className="c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#0">
                          Start Free Trial <span className="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x">-&gt;</span>
                        </a>
                      </div>
                      <div className="cvx4v cazq3">Everything in Starter, plus:</div>
                      <ul className="cxgjn ch3s0 ckdyj">
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Consectetur adipiscing elit</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Consectetur adipiscing elit</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Excepteur sint occaecat cupidatat</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Officia deserunt mollit anim</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Excepteur sint occaecat cupidatat</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Officia deserunt mollit anim</span>
                        </li>
                      </ul>
                    </div>
                    {/* Pricing table 3 */}
                    <div className="c8a4e chip0 csakt cuk8q cz5m3 aos-init aos-animate" data-aos="zoom-out" data-aos-delay={200}>
                      <div className="ciljg">
                        <div className="ch741 cblub cdur3">Enterprise</div>
                        <div className="c6u0s cpfyo c6nex cejd3">
                          <span className="ch05i cazq3 ckdyj">$</span>
                          <span className="c6shg c4bs9 c06qx">129</span>
                          <span className="cazq3 ckdyj">/mo</span>
                        </div>
                        <div className="ciljg ckdyj">For teams building apps for many public &amp; private
                          users.</div>
                        <a className="c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#0">
                          Start Free Trial <span className="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x">-&gt;</span>
                        </a>
                      </div>
                      <div className="cvx4v cazq3">Everything in Business, plus:</div>
                      <ul className="cxgjn ch3s0 ckdyj">
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Unlimited placeholder texts</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Consectetur adipiscing elit</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Excepteur sint occaecat cupidatat</span>
                        </li>
                        <li className="chip0 c4mnq">
                          <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                          </svg>
                          <span>Officia deserunt mollit anim</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Resources */}
            <section>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                <div className="cyo0e c2n62">
                  {/* Section header */}
                  <div className="cbl28 cqg01 czfa1 ckxd8 c2e3f">
                    <h2 className="c4cmz cejd3">Resources to help you get the most out of Neon</h2>
                  </div>
                  {/* Content */}
                  <div x-data="{ category: '1' }">
                    {/* Category buttons */}
                    <div className="csf3z">
                      <div className="c9oht chip0 cutr6 c32kt">
                        <div className="rotate-2">
                          <button className="c8a4e cmxhx cpfyo czrr8 c4a1n c5mpl cof65 cazq3 cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 cs42d ca9no c76qn cxmkl covrk czfkx">
                            <div className="chip0 c4mnq c32kt">
                              <svg className="cjxzk c8u3n cn0vf cveoo cswvv cval9" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.999 9.012a.999.999 0 0 1-.706-1.707l3.496-3.5a.998.998 0 0 1 1.413 0l2.29 2.293 2.79-2.793a.998.998 0 1 1 1.413 1.414l-3.496 3.5a.998.998 0 0 1-1.413 0l-2.29-2.293-2.79 2.793a.998.998 0 0 1-.707.293Z" fillRule="nonzero" />
                              </svg>
                              <span className="cdm1x c6m7s ckwz7 ce7rf">For
                                Developers</span>
                            </div>
                          </button>
                        </div>
                        <div>
                          <button className="c8a4e cmxhx cpfyo czrr8 c4a1n c5mpl cof65 cazq3 cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no c76qn">
                            <div className="chip0 c4mnq c32kt">
                              <svg className="cjxzk c8u3n cn0vf cveoo cswvv" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fillRule="nonzero" />
                              </svg>
                              <span className="cdm1x c6m7s ckwz7 ckdyj cj6cv">For
                                Designers</span>
                            </div>
                          </button>
                        </div>
                        <div>
                          <button className="c8a4e cmxhx cpfyo czrr8 c4a1n c5mpl cof65 cazq3 cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no c76qn">
                            <div className="chip0 c4mnq c32kt">
                              <svg className="cjxzk c8u3n cn0vf cveoo cswvv" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.334 8.06a.5.5 0 0 0-.421-.237 6.023 6.023 0 0 1-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 0 0-.614-.586 6 6 0 1 0 6.832 8.529.5.5 0 0 0-.017-.485Z" fillRule="nonzero" />
                              </svg>
                              <span className="cdm1x c6m7s ckwz7 ckdyj cj6cv">For
                                Founders</span>
                            </div>
                          </button>
                        </div>
                        <div>
                          <button className="c8a4e cmxhx cpfyo czrr8 c4a1n c5mpl cof65 cazq3 cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no c76qn">
                            <div className="chip0 c4mnq c32kt">
                              <svg className="cjxzk c8u3n cn0vf cveoo cswvv" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" fillRule="nonzero" />
                              </svg>
                              <span className="cdm1x c6m7s ckwz7 ckdyj cj6cv">For
                                Marketers</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Boxes */}
                    <div className="cbl28 c8bbi c4ebt c4v1u cu3kj c4t8e cieak cx0go cmz1i cvhfi">
                      {/* 1st Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['1', '3', '4'].includes(category)">
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={26} height={18} xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z" fillRule="nonzero" />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon Telegram</div>
                      </a>
                      {/* 2nd Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['2', '3'].includes(category)" style={{ "display": "none" }}>
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={24} height={18} xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 1.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0C9.095.88 8.852.406 8.641.037A.077.077 0 0 0 8.562 0c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.097.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.839-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 12.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z" fillRule="nonzero" />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon Discord</div>
                      </a>
                      {/* 3rd Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['2', '3', '4'].includes(category)" style={{ "display": "none" }}>
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={22} height={22} xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.083 0H.917A.917.917 0 0 0 0 .917v20.166c0 .507.41.917.917.917h20.166c.507 0 .917-.41.917-.917V.917A.917.917 0 0 0 21.083 0Zm-2.145 4.686L17.651 5.92a.376.376 0 0 0-.143.361v9.068a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.271l1.3-1.264c.128-.128.128-.166.128-.361V7.99l-3.621 9.2h-.489l-4.213-9.2v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271h-4.8v-.271l1.691-2.054a.82.82 0 0 0 .218-.707V7.027a.625.625 0 0 0-.2-.527L3.019 4.686v-.271h4.674l3.613 7.924 3.176-7.924h4.456v.271Z" fillRule="nonzero" />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon Medium</div>
                      </a>
                      {/* 4th Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['1', '4'].includes(category)">
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={24} height={24} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z" fillRule="nonzero" />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon GitHub</div>
                      </a>
                      {/* 5th Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['1', '2', '3'].includes(category)">
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={23} height={23} xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z" fillRule="nonzero" fillOpacity=".64" />
                            <rect width={14} height={17} rx={1} />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon Docs</div>
                      </a>
                      {/* 6th Box */}
                      <a className="c8a4e cprq6 cz5m3 cm1n3 cv4y4 cjzl6 cmg4m ca9no c76qn" href="#0" x-show="['1', '2', '4'].includes(category)">
                        <div className="c8a4e cj6bs chip0 cmv63 cp8l9 c4mnq c32kt czrr8 c4wey ckoll c2xk9 cxmkl cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                          <svg className="cgofc cdm1x c6m7s ckwz7 c930a" width={22} height={18} xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.083 0H.917C.41 0 0 .448 0 1v16c0 .552.41 1 .917 1h20.166c.507 0 .917-.448.917-1V1c0-.552-.41-1-.917-1ZM9 13V5l6 4-6 4Z" fillRule="nonzero" />
                          </svg>
                        </div>
                        <div className="cejd3 cbqc4 cdur3 cum4w">Neon Tutorials</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA */}
            <section>
              <div className="cbl28 c0g2c coaq6 cb0ik">
                {/* CTA box */}
                <div className="c8a4e clv5h cgrq1 chb0g cl6ef co0vc cjv2t ccf17 cvvmk c9ubg aos-init aos-animate" data-aos="zoom-out">
                  {/* Bg illustration */}
                  <div className="c307p c5n0y cqlxj cavhb cp7od c7z7s ctg0r cvu0u" aria-hidden="true">
                    <img src="./images/cta-illustration.svg" className="cy2lr" width={582} height={662} alt="Illustration" />
                  </div>
                  <div className="chip0 cuk8q c4mnq cd10w clmmq">
                    {/* CTA content */}
                    <div className="ciljg ckxd8 c344w c7mel cr5l7">
                      <h3 className="c6u0s cejd3 c6shg c4bs9">Get started with Neon</h3>
                      <p className="c56im">It only takes a few minutes to get started with Neon. Understand
                        your
                        users, start free, today.</p>
                    </div>
                    {/* CTA button */}
                    <div className="cveoo">
                      <a className="c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#0">
                        Start Free Trial <span className="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x">-&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
