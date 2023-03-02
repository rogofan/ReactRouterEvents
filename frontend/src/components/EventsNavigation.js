import classes from "./EventsNavigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/events"
              end
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/events/new"
            >
              New events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
