import { Inject, Injectable } from '@angular/core';
// import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { ref, getDownloadURL } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';
import { Observable, catchError, forkJoin, from, of, switchMap, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonalDataService {

  private cvUrl: string | null = null;
  private cvPhotoUrl: string | null = null;
  private personalData: any = null;
  private projectPhotoUrls: string[] = [];

  constructor(@Inject(Storage) private storage: Storage, private http: HttpClient) {}

  loadData(): Observable<void> {
    // Private Code
  }

  getCvUrl(): string | null {
    return this.cvUrl;
  }

  getCvPhotoUrl(): string | null {
    return this.cvPhotoUrl;
  }

  getPersonalData(): any {
    return this.personalData;
  }

  getProjectPhotoUrls(): string[] {
    return this.projectPhotoUrls;
  }
}