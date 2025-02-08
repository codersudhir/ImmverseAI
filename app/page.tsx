'use client';

import Image from 'next/image';
import { useEffect } from 'react';
"/ app.css"
export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const vrData = [
    {
      title: "HoloLens",
      discription: "HoloLens display information, blend with the real world , or even simulate a virtual world.",
      image: "https://s3-alpha-sig.figma.com/img/dd6c/fcc9/ed40551590a90b2a64b82be9cb334fa4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U1Pf0WZ8z0xb6XL5V1sw924vvgxR7FfdXkqoL1hQKhb3msULAW27KrDHVSjFAitao8WSd~VD4MDFZ-fQlwqkj7SvvIPTKkM7IgZET4SuoVixdGy2~kfwu-vahTDeRQ7qyzVcpkXsyFwtUto4Cid5-lvnYenNRve3LQrAdeYMQ3U35lX13KZ7IZ8Kh4BvdkbWkkkvNjpyK5sxjpRxhr3~1Qpyt3LXrJjmkMcGwl-nLaBzg7FsozQGSYAdPtDQwKUT4asDk4q6LmGSGLTdqOUylYeofGj4ljBMtF1x-bffxd3O~-D182reQSZfkjV7GbUoZI4kX5CMIBueRFynQ2TYpA__"
    },
    {
      title: "RioT",
      discription: "AI and IoT are both emerging innovative technologies with a lot of potentials.",
      image: "https://s3-alpha-sig.figma.com/img/7909/c105/050300ee09842dbf0804b07c998cdbed?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f9htyP6wVesrF6v6VIfpyzTP95cyEa3DKguQYyPBHhE05~FrOlAMDd4xMaeBvAEeivLnKzZsLB44fzlvJtwLxfq2M4xRG0fvf~BYVpGBCQANpVTA3Ed5wegN~2fmmv4WoA4AZ-81hCnwQZJ9D7zpGDE4Au985mWjdq7rXiW682LHx8F6wSq883iKBA3~nwm6qgpo8qbTJnsuUQ~pWiy-o4OXaDqTZl-QWd~-ckh1CFjs1zW5g2e5NnHnFg1PoE7DVYS7bmrJUligUs9~1d5IMotH8meOtcqV2-gkWbZ7540XpDD6WcW9yQBoN7HpwvKsOXD82nN7zgww~uVPKU6hMQ__"
    },
    {
      title: "Metaverse",
      discription: "A Network of 3D virtual worlds focused on social connection. ",
      image: "https://s3-alpha-sig.figma.com/img/5c8f/6f90/04eb71426789a125d2dec11f1aba82e9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bqsCaD-IfThO4JcnllhIoPr8srWEuq8ie4AwlFYb2gTGN8T9rgm2zYqv0IDP16F3dkaRkEdFeUJY~fbKLaqIKvPszLZqG~nPlM0i-OTv4r0Uv1nmRx3WJL4irdhlc0HpphDF9Wu9FiMsHIuPjl-i03WnlsWFagUcdfbjx5tNU0Ge7yGDdpcKSX7jN~ZS93Dop0WV60l32mD5blf-U8Uae7ZCb4FVJKuZr1RRQLwAC4K-GsqO-TWyTf-EBbz6j~g0OYZacpcB5pFFfE1PFaY2GC9GCdCzCX5Ms5JF18oEUIYpfZ1~WXNdELscgc124jyoWjGcF059SpmMtx6AevIOSA__"
    },
    {
      title: "TPCRSTT",
      discription: "Method is great to start students reading and inferring with little assistance from the instructor",
      image: "https://s3-alpha-sig.figma.com/img/4111/be7b/829cfb713300007251626ee65302bbd2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzdFcP6h3WfjOycfOmyjwD9e0~RjejGEBnw3dHkF8fKlBiqA5SoUiGjqJVxNqactEbEuL9s5uW3fK3DKx9CBpVYoR-4v0wSG5Aq4aMo5X92zCV0p-m6cHfmD2T4ndRPD~TsGBnH02TCRAtqTL1asQrMD8-W3-lIIYh1DvxlSTbEP6OR~OtL8-kZ1JgGoyaXnbNzgs~NxWnezdi5wj7LF97SFLV3LQ1ymrMZv73zP4Tx6WOeuz~FzB6CP8uJKVVga1Pxue~xe4oc2V8lAZf-4adbaqFamTo0E5nXxnjgG0m~V85Oe-SylEH42gzZZfQHDIBNpRiHuoj-IiWyZGJ045Q__"
    }
  ]

  return (
    <main className=' w-100'>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black ">
        <div className="container">
          <a className="navbar-brand" href="#">
            ImmverseAI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary rounded-0" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center mt-5 mt-md-0 px-3 px-md-0">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 hero-content">
              <h1 className="display-4 fw-bold mb-4">
                Let's Explore Three-Dimensional Visual
              </h1>
              <p className="lead mb-4">
                With virtual technology you can see the digital world feel more
                real and you can play the game with a new style.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-primary">Get it Now</button>
                <button className="btn btn-outline-light">
                  Explore Device
                </button>
              </div>
              <div className="online-users">
                <Image
                  src="https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={30}
                  height={30}
                  alt="User 1"
                />
                <Image
                  src="https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={30}
                  height={30}
                  alt="User 2"
                />
                <Image
                  src="https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={30}
                  height={30}
                  alt="User 3"
                />
                <Image
                  src="https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={30}
                  height={30}
                  alt="User 3"
                />
                <span className="ms-2">400k people online</span>
              </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center hero-image " style={{ marginTop: "100px" }}>
              <Image
                src="/vr.png" // Public assets should be referenced this way
                width={500}
                height={500}
                alt="VR Experience"
                className="img-fluid vr-image border-0"
              />
            </div>
          </div>


          <div className=" text-white   d-flex justify-content-center align-items-center px-2 md:px-0" style={{ backgroundColor: '#000' }}>
            <div className="row align-items-center">
              <div className="col-md-4 d-flex flex-column align-items-center ">
                <div className=" mb-3 p-2" >
                  <Image src="https://s3-alpha-sig.figma.com/img/fd30/c5e0/16d7274d6ec591820573346a37e7e648?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KG4qJe-qdQcSEgbpwuMJuBHj7OOlDV~tq~VFK5jCqD5rd46AGPIGQv36EMd2PnyBfpSAVhTvmyxlO2Dy5lhKhRUpB9M-Zszyycy0poZVuX5r0FPDii5HAyiv~HZKhhvDvCC-sZ2LqHHTY4ilWZpqKNZJShDxvn3yC~s9R3Nn47k1WwcgLvQOnjVeGJTWY63jlEMYiSsARIi6w2v3Rtl1OFXTVTWbs7EMnuyDqRpEz-KJT~gnUs3T6C5OExLn27QEJOYNMl-csgNuzHJoF5kzlL8sYWHourd077XYO3CCuiINDBWHFZiUwA~3Xyv4CBI1c-2Lx4hWWGVo~NhADCnKNw__" alt="VR Woman" width={300} height={400} className="img-fluid custom-image  vr-img-women "
                  />

                </div>
              </div>
              <div className="col-md-8 d-flex flex-column align-items-center  ">
                <div className=" d-flex mx-auto mb-3 p-2 gap-2 gap-md-5">
                  <Image src="https://s3-alpha-sig.figma.com/img/8d9b/d3f1/f8ad05cd104252f2839a63484815876b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iE6HmrQeGpIWojNce3wQnQqFp7zzqxdbWgw~95hpAD5m5isqcJTMnWmtBrgY0z~Xfap05HQD~1jNB0~iZWiEkShUL6EDu39idk7Eh2P0eoQHFwYWfg9FlpMFaGfqPdEKDKd4E4JHySR9JNtB8y~N89tiVIl8hJ5OgTMR-sBjdYwPhcc0oHXGY5eSDJP0CjHv5gz6KvPap-3oQuIpELViEDdFFkyQt5pMt86sIN1O3vyQjO3SYZIrZXy9~cEOjLrSuZV7PCJy3H5cGmJBwHMDq2OG5eLnWGtZ794Ge5FNdnRgkQQOB33jBmXf8JtuWh7It9H2XJKB9iR67aWVxsPtBg__" alt="VR Man" width={300} height={400} className={`img-fluid custom-image vr-img-men `}
                  />
                  <div className=' mx-auto flex flex-column p-2 align-items-start  text-start  mt-md-5 responsive-width-vr d-none d-md-flex ' >
                    <h2 className="fw-bold fs-4 text-uppercase mt-md-3">New Experience In Playing Game</h2>
                    <p className="text-white ">
                      You can try playing the game with a new style and of course a more real feel, like you are the main
                      character in your game and adventure in this new digital world.
                    </p>
                    <button className="btn btn-primary px-4 py-2 mt-3" style={{ background: "linear-gradient(99.99deg, #B936F5 -21.45%, #C64C85 100%, #F1005B 100%)" }}>Get it Now</button>
                  </div>
                </div>

              </div>
              <div className=' mx-auto flex flex-column p-2 align-items-center   text-start  mt-md-5 d-md-none  ' >
                    <h2 className="fw-bold fs-6 text-uppercase mt-md-3">New Experience In Playing Game</h2>
                    <p className="text-white ">
                      You can try playing the game with a new style and of course a more real feel, like you are the main
                      character in your game and adventure in this new digital world.
                    </p>
                    <button className="btn btn-primary px-4 py-2 mt-3" style={{ background: "linear-gradient(99.99deg, #B936F5 -21.45%, #C64C85 100%, #F1005B 100%)" }}>Get it Now</button>
                  </div>
            </div>
          </div>

        </div>

      </section>

      <div className='notch-border '
      >
        <div className='container d-flex justify-content-between align-items-center p-5 flex-wrap gap-2 '>
          <h2 className='responsive-width'>Awesome experiences with virtual reality world</h2>
          <div>
            <Image alt='new' src={"https://s3-alpha-sig.figma.com/img/635e/7dab/343fa3139d166d4ad9cae9090673b5e3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pGSS-ne46nscRUf46b5S2uj2IsmNRxo21h88rgzrSon3wBzX4XCrpaDBnRHrgHJWZ9tkHTp8g9t0ILjrEBURndPAIekFuYsclvA~xJgyhPh69o-zYAsZhjr3rzAGdCbdbFldwUeQPzqhjMJ5azeLe1m0F5mTUcKv0EVg7kUPj00Y7AMfmdezSTdeQyMDpallU4RJc84wemc0ywCcvlfynWsgVeh9iB-SKi7zn9XIVERTFPS0lk-GKNBXRYhDQoa3GY4UyaA29JJFOoPGw4D3zpS-gWagI-uGA0oy9O17OSY63jXT04nM-6wj09QW-1fdXoa~Gdk8Tez3EsPTJFgw3g__"} width={300} height={200} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className=" row mx-auto  my-5 gap-2 responsive-width" >
        {vrData.map((item, ind) => (
          <div key={ind} className="col-md-6 col-lg-5 mx-auto">
            <div className="feature-card position-relative overflow-hidden">
              <div
                className="feature-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="overlay-text d-flex flex-column justify-content-start align-items-start text-white text-start  w-75 h-50" style={{ top: "150px", backdropFilter: "blur(5px)" }}>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="small">
                  {item.discription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>



      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">What our clients say</h2>
          <p className='text-center responsive-width mx-auto '>See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.</p>
          <div className="row g-4 mt-5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="col-md-4" >
                <div className="testimonial-card p-4" style={{
                  background: "linear-gradient(180deg, #AA14F0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #CB8DE8 -42.58%, rgba(203, 143, 232, 0.18) 4.35%, rgba(151, 60, 68, 0.055) 99.99%, rgba(199, 137, 228, 0) 100%)"
                }}
                >
                  <p className='d-flex' style={{ color: "#F7B603" }}>starstar<span className='text-white'>star</span></p>
                  <p className="mb-4">
                    "Amazing virtual reality experience! The graphics and
                    immersion are incredible."
                  </p>
                  <div className="d-flex align-items-center ">
                    <Image
                      src={`https://s3-alpha-sig.figma.com/img/f45b/5ba1/7b897fb838656f3b0f99f4dad01458da?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mVsgC0pIyvaP5eMzAx0S2k6FEut2fdvMRqvnNu8FFI55kF86WV-qpios84EBBNf7Gn~uJ6awMhKrqbCaBWK2Qq-cS-sk9HNd16NNg5aWuhbu95g51PRl4sIZonZxbbb9Wcg2WrT40S09j9VQMLLZtWyXUkEZd0bHXE3YWVeUpNHxzs3M8cNq~aHUmXlM19p5d9DjXy4ZDiKBNpV887x19jhTQEUmm-lpwzYAM-yiD2Mv50~mKrW5O6OWsrewUAjyh9vNQNIZwBj~mZKFDGfMcWCxlgZ89a9kH4ojqBoUI90Sn85mm6BISRVW1rDdJyx00ouYykgH-cqos3LuA9CqQA__`}
                      width={50}
                      height={50}
                      alt={`Client ${item}`}
                      className="avatar me-3"
                    />
                    <div>
                      <h6 className="mb-0">John Doe</h6>

                      <small className="text-start" style={{ color: "#EB4468" }}>@danny.hill</small>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
