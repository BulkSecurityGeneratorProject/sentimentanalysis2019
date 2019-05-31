import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EntityTestSharedModule } from 'app/shared';
import {
    SearchComponent,
    SearchDetailComponent,
    SearchUpdateComponent,
    SearchDeletePopupComponent,
    SearchDeleteDialogComponent,
    searchRoute,
    searchPopupRoute
} from './';

const ENTITY_STATES = [...searchRoute, ...searchPopupRoute];

@NgModule({
    imports: [EntityTestSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SearchComponent, SearchDetailComponent, SearchUpdateComponent, SearchDeleteDialogComponent, SearchDeletePopupComponent],
    entryComponents: [SearchComponent, SearchUpdateComponent, SearchDeleteDialogComponent, SearchDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityTestSearchModule {}
