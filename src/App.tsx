import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Main } from "./screens/main";
import { Error } from "./screens/error";
import { WebAudio } from "./screens/web-audio";
import { WebShare } from "./screens/web-share";
import { Vibration } from "./screens/vibration";
import { Clipboard } from "./screens/clipboard";
import { WebSpeech } from "./screens/web-speech";
import { Geolocation } from "./screens/geolocation";
import { Notification } from "./screens/notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/clipboard-api",
    element: <Clipboard />,
  },
  {
    path: "/vibration-api",
    element: <Vibration />,
  },
  {
    path: "/notification-api",
    element: <Notification />,
  },
  {
    path: "/geolocation-api",
    element: <Geolocation />,
  },
  {
    path: "/web-share-api",
    element: <WebShare />,
  },
  {
    path: "/web-speech-api",
    element: <WebSpeech />,
  },
  {
    path: "/web-audio-api",
    element: <WebAudio />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
