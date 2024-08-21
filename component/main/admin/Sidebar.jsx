// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
<div className="sidebar">
  <div className="scrollbar-inner sidebar-wrapper">
    <div className="user">
      <div className="photo">
        <img src="/assets/img/profile.jpg" />
      </div>
      <div className="info">
        <a
          className=""
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="true"
        >
          <span>
            Hizrian
            <span className="user-level">Administrator</span>
            <span className="caret" />
          </span>
        </a>
        <div className="clearfix" />
        <div
          className="collapse in"
          id="collapseExample"
          aria-expanded="true"
          style={{}}
        >
          <ul className="nav">
            <li>
              <a href="#profile">
                <span className="link-collapse">My Profile</span>
              </a>
            </li>
            <li>
              <a href="#edit">
                <span className="link-collapse">Edit Profile</span>
              </a>
            </li>
            <li>
              <a href="#settings">
                <span className="link-collapse">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul className="nav">
      <li className="nav-item active">
        <a href="index.html">
          <i className="la la-dashboard" />
          <p>Dashboard</p>
          <span className="badge badge-count">5</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="components.html">
          <i className="la la-table" />
          <p>Components</p>
          <span className="badge badge-count">14</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="forms.html">
          <i className="la la-keyboard-o" />
          <p>Forms</p>
          <span className="badge badge-count">50</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="tables.html">
          <i className="la la-th" />
          <p>Tables</p>
          <span className="badge badge-count">6</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="notifications.html">
          <i className="la la-bell" />
          <p>Notifications</p>
          <span className="badge badge-success">3</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="typography.html">
          <i className="la la-font" />
          <p>Typography</p>
          <span className="badge badge-danger">25</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="icons.html">
          <i className="la la-fonticons" />
          <p>Icons</p>
        </a>
      </li>
      <li className="nav-item update-pro">
        <button data-toggle="modal" data-target="#modalUpdate">
          <i className="la la-hand-pointer-o" />
          <p>Update To Pro</p>
        </button>
      </li>
    </ul>
  </div>
</div>

  );
}
