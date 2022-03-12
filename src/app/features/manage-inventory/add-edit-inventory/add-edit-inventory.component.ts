import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddInventoryRequest } from '../invenotory-constants';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.css']
})
export class AddEditInventoryComponent implements OnInit {
 public addInventoryReq: AddInventoryRequest = new AddInventoryRequest();
  public isUpdate: boolean = false;
  constructor(private dialogRef: MatDialogRef<AddEditInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    if (this.dialogData && this.dialogData.data) {
      this.isUpdate = true;
    this.addInventoryReq = this.dialogData.data;
    }
  }
  addInventory() {
    if (this.addInventoryReq) {
      this.dialogRef.close(this.addInventoryReq);
    }
  }
}
