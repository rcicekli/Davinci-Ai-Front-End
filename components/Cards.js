import { Cinzel_Decorative } from "next/font/google";
import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Cards = () => {
  let videosrc = "/davincivideo.mp4";
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <div>
        <div className="grid justify-items-center mx-auto xs:mt-20">
          <div className="mx-auto mb-14">
            <ReactPlayer
              width="200px"
              height="200px"
              url={videosrc}
              controls={false}
              loop={true}
              playing={true}
              muted={true}
              // light is usefull incase of dark mode
              light={false}
              // picture in picture
              pip={true}
            />
            <source src={videosrc} type="video/mp4" />
          </div>
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-10 mx-auto">
  Explore Artworks
</h1>
          <h1 className="text-gray-500 text-xl text-wrap text-center mb-10 mx-5">
            Explore AI-generated images in diverse styles, unveiling a
            captivating collection of visuals crafted by AI.
          </h1>

          <section id="our-team" className=" bg-transparent text-center mx-10 ">
            <div className=" mx-auto text-xs md:mx-auto sm:mx-auto xs:mx-auto p-10">
              <div className="mx-auto my-6 flex flex-col md:flex-row sm:mx-20 justify-center items-center md:items-stretch">
  {/* items-center: Mobilde dikeydeki kutuları ortalar | md:items-stretch: Masaüstünde eski formuna döndürür */}
  
  {[ "Creepy", "Midjourney", "Pixar", "Portrait", "Tattoo" ].map((text, index) => (
    <div 
      key={index} 
      className="flex items-center justify-center rounded-full px-1 py-1 mx-3 my-2 hover:bg-[#4185d8] hover:text-black transition-all duration-300 bg-transparent border border-solid border-white w-[80%] md:w-full max-w-[300px] md:max-w-none cursor-pointer group"
    >
      {/* justify-center: Mobilde metni kutu içinde ortalar */}
      {/* w-[80%]: Mobilde kutunun çok yayılmaması için daraltıldı, md:w-full ile eski haline döner */}
      
      <h1 className="text-sm text-white group-hover:text-black mx-auto p-3 px-4 text-center">
        {text}
      </h1>
    </div>
  ))}
</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-10s ">
                <div className="bg-white rounded-lg shadow-md p-0  text-center ">
                  <img
                    src="https://img.tamindir.com/2023/03/241137/bing-gorsel-olusturan-yapay-zeka.jpg"
                    alt="Team Member 1"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://cdn.mediacat.com/uploads/2022/12/yapay-zeka-art-niyetli-mi-can-caliskan-ugur-matban.jpg"
                    alt="Team Member 2"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://upcorn.co/wp-content/uploads/2024/01/yapay-zeka-ile-gorsel-olusturma.jpeg"
                    alt="Team Member 3"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://img.freepik.com/ucretsiz-fotograf/biyorobot-konseptinin-3d-render-i_23-2149524396.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Team Member 4"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2023/07/08/1169946-2083533934.png?itok=ZQr27i0l"
                    alt="Team Member 5"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2023/01/15/1089936-1264775354.jpg?itok=FeSj3x3g"
                    alt="Team Member 6"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://kurious.ku.edu.tr/wp-content/uploads/2024/02/Default_paint_me_a_picture_of_the_future_of_generative_AI_mach_0.jpg"
                    alt="Team Member 7"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://vidabytes.com/wp-content/uploads/2023/09/Genera-imagenes-con-IA-en-Canva.jpg"
                    alt="Team Member 8"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://www.deryauluduz.com/wp-content/uploads/2024/05/yapay-zeka-ile-insan-beyni-arasindaki-cilgin-benzerlikler.jpg"
                    alt="Team Member 9"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/13/22/13/ai-art-7717011_960_720.jpg"
                    alt="Team Member 10"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://net-bt.com.tr/wp-content/uploads/2021/07/yapay-zeka.jpg.webp"
                    alt="Team Member 11"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center ">
                  <img
                    src="https://gelecekbilimde.net/wp-content/uploads/2023/08/yapay_zeka.jpg"
                    alt="Team Member 12"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Cards;
