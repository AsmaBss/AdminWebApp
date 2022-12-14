import React from "react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index.html" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          {/* Search */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Users</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bills" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Bills</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
