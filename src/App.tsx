import {
  ArrowsPointingOutIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import allupLogo from "./assets/allup-logo.svg";

// Untyped packages:
/* eslint-disable */
// @ts-ignore
import VideoThumbnail from "react-video-thumbnail";
/* eslint-enable */

const videos = [
  {
    title: "Awesome Alpaca",
    src: "https://assets.wrkvbs.io/o/1a055199-5c1e-40f6-a3dd-8df2ca3fcd09",
    author: "Karolina Grabowska",
    width: 1024,
    height: 540,
  },
  {
    title: "Chilled out Kitten",
    src: "https://assets.wrkvbs.io/o/6e8910d9-a370-44f7-a697-07c3d37df49c",
    author: "Mariam Antadze",
    width: 576,
    height: 1024,
  },
  {
    title: "Strutting Giraffe",
    src: "https://assets.wrkvbs.io/o/d0d80d76-325d-48ed-850e-e7632a164c65",
    author: "Taryn Elliott",
    width: 1024,
    height: 576,
  },
  {
    title: "Koality Time",
    src: "https://assets.wrkvbs.io/o/1360596d-31a1-40a3-a7f6-f649d3797285",
    author: "Valeriia Miller",
    width: 576,
    height: 1024,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function App(): JSX.Element {
  const [fullWidth, setFullWidth] = useState(false);

  const handleWidth = () => {
    setFullWidth(!fullWidth);
  };

  // const videoRef = useRef();
  // const [videoPause, setVideoPause] = useState(false);

  return (
    <>
      <Tab.Group as="div" className="flex h-screen w-screen">
        {({ selectedIndex }) => (
          <>
            <div className="hidden shadow-2xl lg:relative lg:inset-y-0 lg:z-50 lg:flex lg:w-1/4 lg:min-w-[300px] lg:max-w-[420px] lg:flex-col">
              <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                <div className="flex h-16 w-full shrink-0 items-center justify-between gap-x-4">
                  <img
                    className="h-8 w-auto"
                    src={allupLogo}
                    alt="Your Company"
                  />
                  <p className="text-xl font-bold">Video Playlist</p>
                </div>
                <nav className="">
                  <Tab.List
                    as="div"
                    className="m-0 flex flex-col space-y-4 border-0 p-0"
                  >
                    {videos.map((item, index) => (
                      <Tab
                        as="div"
                        key={item.src}
                        className={classNames(
                          selectedIndex == index
                            ? "ring-4 ring-amber-400 ring-offset-4"
                            : "ring-transparent hover:ring-slate-200",
                          "group relative h-32 cursor-pointer overflow-hidden rounded-xl border-0 p-0 text-sm font-semibold outline-none transition-all active:outline-none"
                        )}
                      >
                        <div className="VideoThumbnail transition-all group-hover:scale-110">
                          <VideoThumbnail
                            videoUrl={item.src}
                            thumbnailHandler={(thumbnail: any) =>
                              console.log(thumbnail)
                            }
                            height={300}
                          />
                        </div>

                        <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-between bg-gradient-to-t from-black/75 p-2 transition-all group-hover:opacity-75"></div>
                        <div className="group absolute bottom-0 left-0 flex h-full w-full items-end justify-between p-2">
                          <div className="text-lg font-bold text-white">
                            {item.title}
                            <p className="text-xs font-normal">
                              by {item.author}
                            </p>
                          </div>
                          {selectedIndex == index ? (
                            <p className="relative bottom-1 rounded-full bg-amber-500 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">
                              Playing
                            </p>
                          ) : (
                            <PlayCircleIcon className="h-8 w-8 text-white transition-all group-hover:scale-125 group-hover:text-amber-500" />
                          )}
                        </div>
                      </Tab>
                    ))}
                  </Tab.List>
                </nav>
              </div>
            </div>

            <div className="h-screen w-full flex-1">
              <Tab.Panels as="main" className="bg-slate-200">
                <div className="relative flex h-screen items-center justify-center p-10">
                  {videos.map((video) => (
                    <Tab.Panel as="div" key={video.src} unmount={true}>
                      <div
                        className={classNames(
                          fullWidth
                            ? "absolute left-0 top-0 z-10 w-screen bg-gradient-to-b from-black/75 p-5 px-10 text-white "
                            : "relative pb-10",
                          "flex flex-col items-center justify-between text-center lg:flex-row lg:text-left"
                        )}
                      >
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest">
                            Now Playing
                          </h4>
                          <h3 className="text-3xl font-bold">{video.title}</h3>
                        </div>
                        <p>by {video.author}</p>
                      </div>
                      <div
                        className={classNames(
                          fullWidth ? "" : "relative",
                          "h-full max-h-[100vh] w-full max-w-[100vw] overflow-hidden rounded-xl shadow-2xl lg:max-h-[calc(100vh-200px)] lg:max-w-[calc(100vw-100px)]"
                        )}
                      >
                        <video
                          src={video.src}
                          className={classNames(
                            fullWidth
                              ? "absolute left-0 top-0 h-full overflow-hidden object-cover"
                              : ""
                          )}
                          autoPlay={true}
                          muted={true}
                          loop={true}
                          style={{ aspectRatio: video.width / video.height }}
                        />
                        <div className="absolute bottom-3 right-3 z-40 rounded-full bg-gray-900/25 px-2 py-0.5 text-xs text-white/75 backdrop-blur-sm">
                          {video.width} x {video.height}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          fullWidth
                            ? "absolute bottom-0 left-0 z-10 w-screen bg-gradient-to-t from-black/75 p-5 pb-10 text-white"
                            : "relative pt-10",
                          "flex flex-col items-center justify-between text-center"
                        )}
                      >
                        <button
                          onClick={handleWidth}
                          className="group flex items-center justify-between gap-x-3 rounded-full bg-slate-900 px-10 py-2 font-bold text-white lg:hidden"
                        >
                          {fullWidth ? (
                            <>
                              <XMarkIcon className="h-6 w-6 transition-all group-hover:scale-125" />
                              Exit Fullscreen
                            </>
                          ) : (
                            <>
                              <ArrowsPointingOutIcon className="h-6 w-6 transition-all group-hover:scale-125" />
                              Fullscreen
                            </>
                          )}
                        </button>
                      </div>
                    </Tab.Panel>
                  ))}
                </div>
              </Tab.Panels>
            </div>
          </>
        )}
      </Tab.Group>
    </>
  );
}
