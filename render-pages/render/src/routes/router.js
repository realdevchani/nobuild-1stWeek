import Intro from "../pages/Intro";
import HeaderWithFooter from "../pages/lay-out/HeaderWithFooter";
import { createBrowserRouter } from "react-router-dom";
import ContactContainer from "../pages/ContactContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderWithFooter />,
    children: [
      {
        path: "intro",
        element: <Intro />
      },
      {
        path: "contact",
        element: <ContactContainer />
      }
    ]
  }
]);

export default router;
