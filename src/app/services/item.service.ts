import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    items: Array<any> = [
        {
            'id': '1',
            'title': 'Example 1',
            'description': 'description 1'
        },
        {
            'id': '2',
            'title': 'Example 2',
            'description': 'description 2'
        },
        {
            'id': '3',
            'title': 'Example 3',
            'description': 'description 3'
        },
        {
            'id': '4',
            'title': 'Example 4',
            'description': 'description 4'
        },
        {
            'id': '5',
            'title': 'Need a more complex app?',
            'description': 'Check the Ionic 4 Full Starter App.'
        }
    ];


    tables: Array<any> = [

        {
            'id': '1',
            'name': 'AXB65',
            'seats': 4,
            'status': 'AVAILABLE'
        },
        {
            'id': '2',
            'name': 'AXB66',
            'seats': 4,
            'status': 'BOOKED'
        },
        {
            'id': '3',
            'name': 'AXB67',
            'seats': 2,
            'status': 'BOOKED'
        },
        {
            'id': '4',
            'name': 'AXB68',
            'seats': 4,
            'status': 'AVAILABLE'
        },
        {
            'id': '5',
            'name': 'AXB69',
            'seats': 2,
            'status': 'AVAILABLE'
        },
        {
            'id': '6',
            'name': 'AXB70',
            'seats': 2,
            'status': 'AVAILABLE'
        },
        {
            'id': '7',
            'name': 'AXB71',
            'seats': 6,
            'status': 'BOOKED'
        },
        {
            'id': '8',
            'name': 'AXB72',
            'seats': 8,
            'status': 'AVAILABLE'
        },
        {
            'id': '9',
            'name': 'AXB73',
            'seats': 8,
            'status': 'BOOKED'
        },
        {
            'id': '10',
            'name': 'AXB74',
            'seats': 8,
            'status': 'BOOKED'
        },
        {
            'id': '11',
            'name': 'AXB75',
            'seats': 6,
            'status': 'BOOKED'
        },
        {
            'id': '12',
            'name': 'AXB76',
            'seats': 2,
            'status': 'AVAILABLE'
        },
        {
            'id': '13',
            'name': 'AXB77',
            'seats': 4,
            'status': 'BOOKED'
        },
        {
            'id': '14',
            'name': 'AXB78',
            'seats': 4,
            'status': 'BOOKED'
        },
        {
            'id': '16',
            'name': 'AXB79',
            'seats': 8,
            'status': 'BOOKED'
        }

    ];

    constructor() {
    }

    getTables() {
        return this.tables;
    }

    createItem(title, description) {

        let randomId = Math.random().toString(36).substr(2, 5);

        this.items.push({
            'id': randomId,
            'title': title,
            'description': description
        });
    }

    getItems() {
        return this.items;
    }

    getItemById(id) {
        return this.items.filter(item => item.id === id);
    }

    updateItem(newValues) {
        let itemIndex = this.items.findIndex(item => item.id == newValues.id);
        this.items[itemIndex] = newValues;
    }
}
