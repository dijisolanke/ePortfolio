export default function SiteHeader() {
  return (
    <>
      <section className="page-flow">
        <section className="one">
          <header>
            <div className="floating-logo">
              <a className="logo" href="/">
                DIJI SOLANKE
              </a>
            </div>

            <div className="header-nav">
              <a className="nav-items btn" href="/modelling">
                Modelling
              </a>
              <a className="nav-items btn" href="/music">
                Music
              </a>
              <a className="nav-items btn" href="/dev">
                Web Development
              </a>
            </div>
            <div className="header-margin"></div>
          </header>
        </section>
      </section>
    </>
  );
}
