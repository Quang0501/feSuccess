import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VNPayService {
  private apiUrl = 'https://besuccess.onrender.com/api/v1';  // Update with your backend URL

  constructor(private http: HttpClient) {}

  createOrder(amount: number, orderInfo: string): Observable<string> {
    const body = {
      amount: amount,
      orderInfo: orderInfo
    };
    return this.http.post<string>(`${this.apiUrl}/submitOrder`, body, { responseType: 'text' as 'json' });
  }
  
  
}
