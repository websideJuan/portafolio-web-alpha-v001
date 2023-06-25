import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import bg_hero from './src/assets/hero_bacground.png'
import about_me from './src/assets/about_me.png'
import responsive_img from './src/assets/responsive_design.png'
import posicionamiento_img from './src/assets/posicionamiento.png'
import administracion_img from './src/assets/administracion_web.png'




document.querySelector('#app').innerHTML = `
<main>

  <nav class='navbar navbar-expand-lg d-none'>
    <ul class="navbar-nav justify-content-start">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </nav>

  <section class='hero pt-5'> 
    <img src=${bg_hero} width='100%' heigth='100%'/>

    <div class='container'>
      <div class='row position-relative'>

        <div class='col-md-6 text-white d-flex flex-column align-items-start justify-content-around' style='height: 80vh;'>
          <span class='fs-4'>Web developer</span>
      
          <h1 class='mt-auto display-3'><b>Juan Herrera W.</b></h1>

          <p class='fs-4'>Diseñador y desarrollador <br class='gap_md' /> web, Full Stack!</p>

          <a class='btn btn-danger rounded-0 mb-5' href='#'>Contactame</a>

        </div>

        <div class='col-md-6 position-absolute pe-none' style='height: 100%; padding-bottom: 2.5rem; width: 100%; left: 0;'>
          <div class='position-sticky pe-auto top-0 end-0 d-flex flex-column align-items-end gap-4' data-bs-theme='dark'>
            <a href='#' class='btn'>
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href='#' class='btn'>
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a href='#' class='btn'>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href='#' class='btn'>
              <i class="fa-brands fa-tiktok fa-2xl"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section>
    <div class='container'>

      <div class='row' style='height: 100vh; display: flex; align-items: center;'>

        <div class='col-md-7'>
          <h1 class='fs-1 border-start ps-2 border-danger border-3'><b>Sobre mi</b><h1>
          
          <p class='fs-6 mt-4 text-body-tertiary text-wrap' style='width: 100%; max-width: 30rem;'>
            Al momento de desarrollar, la pasión y el gusto por la programación
            me permiten crear un diseño que satisface las necesidades de tus clientes, 
            publico objetivo, o simple gusto por comunicar un mensaje o crear algún 
            tipo de contenido en la web. 
          </p>
          
          <p class='fs-6 mb-5 text-body-tertiary text-wrap' style='width: 100%; max-width: 30rem;'>
            Permíteme crear la solución digital de tu marca, pime,
            o pequeño negocio necesita y logremos juntos la transformación 
            digital para enfrentar la digitalización, contáctame.
          <p>

        </div>

        <br />

        <div class='col-md-5'>
          
          <img src='${about_me}' width='100%' height='100%'/>
          
        </div>
      </div>

    </div>
  </section>

  <section class='container'>
    <div class='row' style='padding: 7rem 0; height: 100%;'>
      
      <div class='col-md-6 mb-5'>
        <div class='d-flex flex-column align-items-start justify-content-center'>
          <h1 class='border-start border-danger border-3 ps-2'><b>Conjunto de <br /> habilidades</b></h1>
        </div>
      </div>

      <div class='col-md-6 d-flex flex-column align-items-end gap-5'>
        
        <div class='d-flex flex-column flex-md-row align-items-center gap-3' style='width: 100%; max-width: 28rem;'>
          <img src=${responsive_img} width='90px' height='70px' />
          <div>
            <h1 class='fs-4'>Responsive design</h1>
            <p style='font-size: .75rem; text-align: justify;'>
              La forma en que  mas se visualiza 
              una pagina web es desde el mobile, 
              por eso crear un diseño responsive 
              es esencial. texto de prueba para
              agregar contenido texto de prueba para
              agregar contenido
            </p>
          </div>
        </div>

        <div class='d-flex flex-column flex-md-row align-items-center gap-3' style='width: 100%; max-width: 28rem;'>
          <img src=${administracion_img} width='90px' height='70px' />          
          <div>
            <h1 class='fs-4'>Administración Web</h1>
            <p style='font-size: .75rem; text-align: justify;''>
              Disfruta de un viaje sin 
              complicaciones con estos 
              consejos antes, durante 
              y después del viaje. texto de prueba para
              agregar contenido texto de prueba para
              agregar contenido
            </p>
          </div>
        </div>

        <div class='d-flex flex-column flex-md-row align-items-center gap-3' style='width: 100%; max-width: 28rem;'>
          <img src=${posicionamiento_img} width='90px' height='70px' />
          <div>
            <h1 class='fs-4'>SEO, SEM en Google</h1>
            <p style='font-size: .75rem; text-align: justify;''>
              La forma en que  mas se visualiza 
              una pagina web es desde el mobile, 
              por eso crear un diseño responsive 
              es esencial. texto de prueba para
              agregar contenido  texto de prueba para
              agregar contenido
            </p>
          </div>
        </div>

      <div>
    <div>
  </section>



</main>
`