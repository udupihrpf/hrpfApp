const header = `
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color:#f73b3b;">
      <a href="https://lucky-rathore.github.io/hrpfApp/">
      <img src="assets/img/hrpf-logo.jpeg" width="50px" height="50px">
      </a>
      <button class="navbar-toggler mr-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">          
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Our Work<span class="sr-only">(current)</span></a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="cause.html?page=Human Rights">Human Rights</a>
              <a class="dropdown-item" href="cause.html?page=Human Trafficking">Human Traffiking </a>
              <a class="dropdown-item" href="cause.html?page=Labour">Labour</a>
              <a class="dropdown-item" href="cause.html?page=Environment">Environment</a>
              <a class="dropdown-item" href="cause.html?page=Consumer Rights">Consumer Rights</a>
              <a class="dropdown-item" href="cause.html?page=Senior Citizens">Senior Citizens</a>
              <a class="dropdown-item" href="cause.html?page=Other">Other</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Work With Us<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="image-gallery.html">Glipmses<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="publications.html">Publications<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="contact-us.html">Contact Us<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
`
const footer = `
<footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-4 col-md">
        <h5 class="ml-3">Our Work</h5>
        <ul class="ml-3 list-unstyled text-small">
          <li><a class="text-muted" href="cause.html?page=Human Rights">Human Rights</a></li>
          <li><a class="text-muted" href="cause.html?page=Human Trafficking">Human Traffiking</a></li>
          <li><a class="text-muted" href="cause.html?page=Labour">Labour</a></li>
          <li><a class="text-muted" href="cause.html?page=Environment">Environment</a></li>
          <li><a class="text-muted" href="cause.html?page=Consumer Rights">Consumer Rights</a></li>
          <li><a class="text-muted" href="cause.html?page=Senior Citizens">Senior Citizen</a></li>
        </ul>
      </div>
      <div class="col-4 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="publications.html">Publications</a></li>
          <li><a class="text-muted" href="image-gallery.html">Glipmses</a></li>
        </ul>
      </div>
      <div class="col-4 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="contact-us.html">Contact us</a></li>
          <li><a class="text-muted" href="#">Volunteer with us</a></li>
        </ul>
      </div>
    </div>
  </footer>
`
const body = document.getElementsByTagName('body');
body[0].innerHTML = header + body[0].innerHTML;
body[0].innerHTML = body[0].innerHTML + footer;

