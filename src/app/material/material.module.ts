import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSidenavModule,
  MatListModule,MatExpansionModule,MatTableModule,MatSelectModule,MatProgressSpinnerModule,MatButtonModule,MatCardModule,MatIconModule,MatInputModule,MatSnackBarModule,MatToolbarModule} from '@angular/material';


const MaterialModules = [
  MatSidenavModule,MatSelectModule,MatListModule, MatExpansionModule,MatTableModule,MatProgressSpinnerModule,MatButtonModule,MatCardModule,MatIconModule,MatInputModule,MatSnackBarModule,MatToolbarModule
];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialModule { }
