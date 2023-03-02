import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetails, {
  loader as eventDetailLoader,
  action as deleteEvent,
} from "./pages/EventDetail";
import RootLayoutNavigation from "./pages/EventRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsLetterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <RootLayoutNavigation />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEvent,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsLetterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
