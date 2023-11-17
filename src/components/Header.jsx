import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container px-0">
    <a className="navbar-brand" href="/line/line4">乗降ログ記録サービス</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="/line/line4">Home</a></li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
