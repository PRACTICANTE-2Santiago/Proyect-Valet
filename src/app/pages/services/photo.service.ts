import { Injectable } from '@angular/core';

import {Camera, CameraResultType, CameraSource, } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

export interface CarPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})


export class PhotoService {
  public photos: CarPhoto[] = [];

  constructor( ) { }


  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: "soon..",
      webviewPath: capturedPhoto.webPath
    });
    
  }

}
