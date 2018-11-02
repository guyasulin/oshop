import { switchMap } from 'rxjs/internal/operators/switchMap';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(
    private authService:AuthService,
    private orderService:OrderService) { 

      this.orders$ = authService.user$
      .pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
    }

  ngOnInit() {
  }

}
