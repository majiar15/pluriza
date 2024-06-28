import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table headers correctly', () => {
    component.titles = ['id', 'name', 'email'];
    fixture.detectChanges();
    const headers = fixture.nativeElement.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('id');
    expect(headers[1].textContent).toContain('name');
    expect(headers[2].textContent).toContain('email');
  });

  it('should render table data correctly', () => {
    component.data = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
    ];
    component.titles = ['id', 'name', 'email'];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);

    // Check data in the first row
    const firstRowCells = rows[0].querySelectorAll('td');
    expect(firstRowCells.length).toBe(3);
    expect(firstRowCells[0].textContent).toContain('1');
    expect(firstRowCells[1].textContent).toContain('Alice');
    expect(firstRowCells[2].textContent).toContain('alice@example.com');

    // Check data in the second row
    const secondRowCells = rows[1].querySelectorAll('td');
    expect(secondRowCells.length).toBe(3);
    expect(secondRowCells[0].textContent).toContain('2');
    expect(secondRowCells[1].textContent).toContain('Bob');
    expect(secondRowCells[2].textContent).toContain('bob@example.com');
  });

  it('should call getObjectKeys and return correct keys', () => {
    const obj = { _id: 1, name: 'Alice', email: 'alice@example.com' };
    const keys = component.getObjectKeys(obj);
    expect(keys.length).toBe(2); // Excluding _id
    expect(keys).toContain('name');
    expect(keys).toContain('email');
    expect(keys).not.toContain('_id');
  });
});
