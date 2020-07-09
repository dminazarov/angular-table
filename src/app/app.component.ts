import { Component } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { CompanyService } from './services/company.service';
import { SmartTableService } from './@core/smart-table';
import { ToastComponent } from './shared/toast/toast.component';
import { Company } from './shared/models/company.model';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  payPalConfig?: IPayPalConfig;
  title = 'angular-table';
  amount = '29.00';
  isLoading: boolean = false;
  showSuccess: boolean = false;
  settings = {};
  companies: Company[] = [];

  constructor(private companyService: CompanyService,
    private smartService: SmartTableService,
    public toast: ToastComponent) {
      this.settings = this.smartService.settings;
  }

  ngOnInit() {
    this.initConfig();

    const status = localStorage.getItem('dataSource');
    this.showSuccess = status === 'success333' ? true : false;

    if (!this.showSuccess) return;
    this.setCompanies();
  }

  setCompanies() {
    this.isLoading = true;

    this.companyService.getCompanies().subscribe(
      data => {
        this.companies = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  transactionCompleted() {
    localStorage.setItem('dataSource', 'success');
    this.showSuccess = true;
    this.setCompanies();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.amount,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.amount
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.amount,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.transactionCompleted();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
