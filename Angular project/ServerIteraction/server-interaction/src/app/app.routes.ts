import { Routes } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';
import { WriterComponent } from './writer/writer.component';

export const routes: Routes = [{
    path:'reader',component:ReaderComponent
},
{path:'writer',component:WriterComponent}];
