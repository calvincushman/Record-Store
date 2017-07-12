import { Injectable } from '@angular/core';
import { Album } from './album.model';

export const ALBUMS: Album[] = [
  new Album("Ylistis", "Cosmic Church", "2012 album by Finnish black metal band"),
  new Album("Balance", "Swollen Members", "1998 hip hop album by Vancouver BC duo"),
  new Album("Surfer Rosa", "The Pixies", "1992 record by american band")
];
