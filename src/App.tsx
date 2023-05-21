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
      <Tab.Group
        as="div"
        className="m-0 flex h-screen w-screen flex-col p-0 lg:flex-row"
      >
        {({ selectedIndex }) => (
          <>
            <div className="shadow-2xl lg:relative lg:inset-y-0 lg:z-50 lg:flex lg:w-1/4 lg:min-w-[300px] lg:max-w-[420px] lg:flex-col">
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white p-4  lg:px-6">
                <div className="flex w-full shrink-0 items-center justify-between gap-x-4">
                  <img
                    className="h-6 w-auto lg:h-8"
                    src={allupLogo}
                    alt="Your Company"
                  />
                  <p className="text-md font-bold lg:text-xl">Video Playlist</p>
                </div>
                <nav>
                  <Tab.List
                    as="div"
                    className="m-0 flex flex-row justify-around space-x-4 border-0 p-0 lg:flex-col lg:space-x-0 lg:space-y-4"
                  >
                    {videos.map((item, index) => (
                      <Tab
                        as="div"
                        key={item.src}
                        className={classNames(
                          selectedIndex == index
                            ? "ring-4 ring-amber-400 ring-offset-4"
                            : "ring-transparent hover:ring-slate-200",
                          "group relative h-12 flex-1 cursor-pointer overflow-hidden rounded-xl border-0 p-0 text-sm font-semibold outline-none transition-all active:outline-none lg:h-32 lg:w-full"
                        )}
                      >
                        <div
                          className={classNames(
                            selectedIndex == index ? "scale-110" : "",
                            "VideoThumbnail w-full transition-all group-hover:scale-110"
                          )}
                        >
                          <VideoThumbnail
                            videoUrl={item.src}
                            thumbnailHandler={(thumbnail: any) =>
                              console.log(thumbnail)
                            }
                            height={300}
                          />
                        </div>

                        <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-between bg-gradient-to-t from-black/75 p-2 transition-all group-hover:opacity-75"></div>
                        <div
                          className={classNames(
                            selectedIndex == index
                              ? "backdrop-blur-sm lg:backdrop-blur-none"
                              : "",
                            "group absolute bottom-0 left-0 flex h-full w-full items-center justify-center p-2 transition-all lg:items-end lg:justify-between"
                          )}
                        >
                          <div className="hidden text-lg font-bold text-white lg:block">
                            {item.title}
                            <p className="text-xs font-normal">
                              by {item.author}
                            </p>
                          </div>
                          {selectedIndex == index ? (
                            <p className="relative rounded-full py-1 text-xs font-bold uppercase text-white lg:bottom-1 lg:block lg:bg-amber-500 lg:px-2 lg:tracking-widest">
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

            <div className="h-full flex-1 lg:h-screen">
              <Tab.Panels
                as="main"
                className="relative flex h-full w-screen items-center justify-center bg-slate-200 lg:h-screen lg:w-auto"
              >
                <div className="flex items-center justify-center px-5 lg:px-10">
                  {videos.map((video) => (
                    <Tab.Panel as="div" key={video.src} unmount={true}>
                      <div
                        className={classNames(
                          fullWidth
                            ? "absolute left-0 top-0 z-10 w-screen bg-gradient-to-b from-black/75 pb-20 pt-10 text-white"
                            : "relative pb-5",
                          "flex flex-col items-center justify-between text-center lg:flex-row lg:text-left"
                        )}
                      >
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest">
                            Now Playing
                          </h4>
                          <h3 className="whitespace-nowrap text-3xl font-bold">
                            {video.title}
                          </h3>
                        </div>
                        <p className="text-sm">by {video.author}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div
                          className={classNames(
                            fullWidth ? "" : "relative",
                            "overflow-hidden rounded-xl bg-slate-900/25 shadow-2xl"
                          )}
                        >
                          <video
                            src={video.src}
                            className={classNames(
                              fullWidth
                                ? "absolute left-0 top-0 h-full w-full overflow-hidden object-cover"
                                : "h-full max-h-[55vh] w-full lg:max-h-[75vh]"
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
                      </div>
                      <div
                        className={classNames(
                          fullWidth
                            ? "absolute bottom-0 left-0 z-10 w-screen bg-gradient-to-t from-black/75 p-5 pb-10 text-white"
                            : "relative pt-5",
                          "flex flex-col items-center justify-between text-center"
                        )}
                      >
                        <button
                          onClick={handleWidth}
                          className="text-md group flex items-center justify-between gap-x-3 rounded-full bg-slate-900 px-8 py-2 font-bold text-white lg:hidden"
                        >
                          {fullWidth ? (
                            <>
                              <XMarkIcon className="h-5 w-5 transition-all group-hover:scale-125" />
                              Exit Fullscreen
                            </>
                          ) : (
                            <>
                              <ArrowsPointingOutIcon className="h-5 w-5 transition-all group-hover:scale-125" />
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
