import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empty-wishlist',
  templateUrl: './empty-wishlist.component.html',
  styleUrls: ['./empty-wishlist.component.scss'],
})
export class EmptyWishlistComponent {
  icons = {
    heart: faHeart,
  };
}
