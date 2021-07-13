import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../shared/produits';

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.scss']
})
export class CarouselPauseComponent implements OnInit {

  produits!: Produit[]

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(private produitService: ProduitService,
              private cartService : CartService) { }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(produitsReponseServeur => {
      console.log(produitsReponseServeur);
      //let Data = produitReponseServeur.data[0];
      //const {data} = produitsReponseServeur;
      this.produits = produitsReponseServeur;
    });
  }

  addTocart(produit: Produit): void{
    this.cartService.addProductToCard(produit);
    //let onclick = 'window.location.reload(false)';
    //console.log(this.cart);
  }


  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
