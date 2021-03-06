import { Injectable } from '@angular/core';

@Injectable()
export class GridDataService {

  constructor() { }

  getData(): any {
     return  [
       {
         'ProductID': 1,
         'ProductName': 'Chai',
         'SupplierID': 1,
         'CategoryID': 1,
         'QuantityPerUnit': '10 boxes x 20 bags',
         'UnitPrice': 18,
         'UnitsInStock': 39,
         'UnitsOnOrder': 0,
         'ReorderLevel': 10,
         'Discontinued': false,
         'Category': {
           'CategoryID': 1,
           'CategoryName': 'Beverages',
           'Description': 'Soft drinks, coffees, teas, beers, and ales'
         },
         'FirstOrderedOn': new Date(1996, 8, 20)
       },
       {
         'ProductID': 2,
         'ProductName': 'Chang',
         'SupplierID': 1,
         'CategoryID': 1,
         'QuantityPerUnit': '24 - 12 oz bottles',
         'UnitPrice': 19,
         'UnitsInStock': 17,
         'UnitsOnOrder': 40,
         'ReorderLevel': 25,
         'Discontinued': false,
         'Category': {
           'CategoryID': 1,
           'CategoryName': 'Beverages',
           'Description': 'Soft drinks, coffees, teas, beers, and ales'
         },
         'FirstOrderedOn': new Date(1996, 7, 12)
       }
     ];
   }


}
