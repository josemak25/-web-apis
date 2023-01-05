import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { File } from "./screens/file";
import { Main } from "./screens/main";
import { Error } from "./screens/error";
import { Keyboard } from "./screens/keyboard";
import { Contacts } from "./screens/contacts";
import { WebAudio } from "./screens/web-audio";
import { WebShare } from "./screens/web-share";
import { Vibration } from "./screens/vibration";
import { Clipboard } from "./screens/clipboard";
import { WebSpeech } from "./screens/web-speech";
import { LocalFonts } from "./screens/local-fonts";
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
    path: "/keyboard-api",
    element: <Keyboard />,
  },
  {
    path: "/geolocation-api",
    element: <Geolocation />,
  },
  {
    path: "/file-api",
    element: <File />,
  },
  {
    path: "/local-fonts-api",
    element: <LocalFonts />,
  },
  {
    path: "/contacts-api",
    element: <Contacts />,
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
