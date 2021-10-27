Vue.component('footer1', {

    template:
    `<footer class="Footer">
    <h3 id="redes">Redes sociales:</h3>
    <h3 id="ubi">Ubicación:</h3>
    <h3 id="contacto"> Contacto:</h3>
    <div  id="tw"> 
    
    Twitter: <a href="https://twitter.com/Lucho_scala" target="_blank"><i class="fab fa-twitter"></i>   </a>
    
    </div>
    <iframe id="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1128.6103919438526!2d-58.44661613351706!3d-34.560375918028726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57d2cfa738b%3A0x4e1eb5ca4a2a24c4!2sPampa%20y%20la%20v%C3%ADa!5e0!3m2!1ses-419!2sar!4v1634684062730!5m2!1ses-419!2sar"  allowfullscreen="" loading="lazy"></iframe>
    <div  id="mail">Mail: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRQPGKHDQdvclDxdCZcpkmpghbXvrqvjnKlSpqzfLDbLBfdZbTkwLdBGjLHDklvJvkBbjr" target="_blank"> lucianoscala98@gmail.com </a></div>
    <div  id="ig">
        Instagram:    <a href="https://www.instagram.com/luciano.scala/" target="_blank"><i class="fab fa-instagram"></i> </a> 
    
    </div>
  
    <div id="tel">Teléfono: 4555-5555</div>
   


</footer>`
})

const footer = new Vue({
    el: "#Footer"


})