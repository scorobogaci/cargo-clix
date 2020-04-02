import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../../services/item.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    items: Array<any>;
    tables: Array<any>;
    filteredTables: Array<any>;

    seats: Array<any>;

    constructor(
        private router: Router,
        public itemService: ItemService
    ) {
    }

    activeFilter(seat: any) {
        this.clearFilters();
        let index = this.seats.indexOf(seat);
        this.seats[index].active = true;

        this.filteredTables = this.filteredTables.filter(table => table.seats === seat.capacity);
    }

    clearFilters() {
        this.filteredTables = this.tables;
        this.seats.forEach(seat => {
            seat.active = false;
        });
    }

    ngOnInit() {
        this.seats = [
            {
                'capacity': 2,
                'active': false
            },
            {
                'capacity': 4,
                'active': false
            },
            {
                'capacity': 6,
                'active': false
            },
            {
                'capacity': 8,
                'active': false
            }
        ];

        this.filteredTables = this.itemService.getTables();
        this.items = this.itemService.getItems();
        this.tables = this.itemService.getTables();
    }

}
