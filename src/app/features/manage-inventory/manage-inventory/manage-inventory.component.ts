import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatTableDataSource, Sort } from '@angular/material';
import { AddEditInventoryComponent } from '../add-edit-inventory/add-edit-inventory.component';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['name', 'dataSourceFormat', 'description', 'businessOwner', 'price', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  sortedData: any[];
  constructor(private dialog: MatDialog, private httpClient: HttpClient,
    private snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.getInventoryList();
  }
  // fetch the list of inventory from a json file
  getInventoryList() {
    this.httpClient.get('assets/inventoryList.json').subscribe((response: any) => {
      this.dataSource.data = response;
      this.processTable();
    });
  }
  // add a record
  onAdd() {
    this.dialog.open(AddEditInventoryComponent).afterClosed().subscribe((result) => {
      if (result) {
        result['id'] = Math.floor(Math.random() * 100000);
        this.openSnackBar('Succefully added.', '')
        this.dataSource.data.push(result);
        this.processTable();
      }
    });;
  }
  // edit a record
  onEdit(dataItem) {
    const dialogData = {
      data: JSON.parse(JSON.stringify(dataItem))
    };
    this.dialog.open(AddEditInventoryComponent, {
      data: dialogData
    }).afterClosed().subscribe((result) => {
      if (result) {
        let index = this.dataSource.data.findIndex(o => o.id === dataItem.id);
        if (index > -1) {
          this.dataSource.data[index] = result;
        }
        this.openSnackBar('Succefully updated.', '');
        this.processTable();
      }
    });
  }
  processTable() {
    this.dataSource.paginator = this.paginator;
  }
  // delete a record
  onDelete(data) {
    let findIndex = this.dataSource.data.findIndex(o => o.id == data.id);
    if (findIndex > -1) {
      this.dataSource.data.splice(findIndex, 1);
      this.openSnackBar('Succefully deleted.', '')
      this.processTable();
    }
  }
  // sorting data
  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      this.dataSource.data = this.sortedData;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      if (sort.active ) {
          return this.compare(a.name, b.name, isAsc);
      }
    });
    this.dataSource.data = this.sortedData;
    this.processTable();
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  // for searching data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.processTable();
  }
  // show status message
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
