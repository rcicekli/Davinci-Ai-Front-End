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
          <h1 className="text-white font-extrabold text-5xl mb-10 md:mx-auto sm:mx-auto xs:mx-auto">
            Explore Artworks
          </h1>
          <h1 className="text-gray-500 text-xl text-wrap text-center mb-10 mx-5">
            Explore AI-generated images in diverse styles, unveiling a
            captivating collection of visuals crafted by AI.
          </h1>

          <section id="our-team" className=" bg-transparent text-center mx-10 ">
            <div className=" mx-auto text-xs md:mx-auto sm:mx-auto xs:mx-auto p-10">
              <div className="mx-auto my-6 flex flex-col md:flex-row xs:flex-col sm:mx-20 justify-center">
                <div className="md:flex items-center rounded-full px-1 py-1 mx-3 my-2 sm:my-2 hover:bg-gray-600 bg-transparent border border-solid border-white w-full">
                  <h1 className="text-sm text-white mx-auto p-3 px-4">
                    Creepy
                  </h1>
                </div>
                <div className="md:flex items-center rounded-full px-1 py-1 mx-3 my-2 sm:my-2 hover:bg-gray-600 bg-transparent border border-solid border-white w-full">
                  <h1 className="text-sm text-white mx-auto p-3 px-4">
                    Midjourney
                  </h1>
                </div>
                <div className="md:flex items-center rounded-full px-1 py-1 mx-3  my-2 sm:my-2 hover:bg-gray-600 bg-transparent border border-solid border-white w-full">
                  <h1 className="text-sm text-white mx-auto p-3 px-4">Pixar</h1>
                </div>
                <div className="md:flex items-center rounded-full px-1 py-1 my-2 mx-3 sm:my-2 hover:bg-gray-600 bg-transparent border border-solid border-white w-full">
                  <h1 className="text-sm text-white mx-auto p-3 px-4">
                    Portrait
                  </h1>
                </div>
                <div className="md:flex items-center rounded-full px-1 py-1 mx-3 my-2 sm:my-2 hover:bg-gray-600 bg-transparent border border-solid border-white w-full">
                  <h1 className="text-sm text-white mx-auto p-3 px-4">
                    Tattoo
                  </h1>
                </div>
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
                    src="https://media.licdn.com/dms/image/D4D12AQECBPPQfpXJpQ/article-cover_image-shrink_720_1280/0/1687260970494?e=2147483647&v=beta&t=lw3UoUIeG_8Pqj7oM8EjvPiM9Yg00CVWxzZ2A2wxA0Q"
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
                    alt="Team Member 8"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/13/22/13/ai-art-7717011_960_720.jpg"
                    alt="Team Member 8"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center">
                  <img
                    src="https://www.webtekno.com/images/editor/default/0004/24/ce990c020412edf7f467634ce383ac1fca2edec7.jpeg"
                    alt="Team Member 8"
                    className="w-full h-full rounded-lg mb-4"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-0  text-center ">
                  <img
                    src="https://gelecekbilimde.net/wp-content/uploads/2023/08/yapay_zeka.jpg"
                    alt="Team Member 8"
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
