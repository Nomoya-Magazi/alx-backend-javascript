/// <reference path="./crude.d.ts" />
import { RowId, RowElement } from './interface';
import * as CRUD from '.crud';

const row:RowElement = {
	firstName: Guillaume,
	lastName: Salva,
}

const newRow: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age:23};
CRUD.updateRow(newRowID, updatedRow);
CRUDE.deleRow(newRowID);
