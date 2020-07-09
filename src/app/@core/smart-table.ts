import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  settings = {
    actions: false,
    pager: {
      perPage: 100,
    },
    columns: {
      id: {
        title: 'ID',
        editable: false,
        type: 'string'
      },
      LoanRange: {
        title: 'LoanRange',
        type: 'string'
      },
      BusinessName: {
        title: 'BusinessName',
        type: 'string'
      },
      Address: {
        title: 'Address',
        type: 'string'
      },
      City: {
        title: 'City',
        type: 'string'
      },
      State: {
        title: 'State',
        type: 'string'
      },
      Zip: {
        title: 'Zip',
        type: 'string'
      },
      NAICSCode: {
        title: 'NAICSCode',
        type: 'string'
      },
      NAICSIndustry: {
        title: 'NAICSIndustry',
        type: 'string'
      },
      BusinessType: {
        title: 'BusinessType',
        type: 'string'
      },
      RaceEthnicity: {
        title: 'RaceEthnicity',
        type: 'string'
      },
      Gender: {
        title: 'Gender',
        type: 'string'
      },
      Veteran: {
        title: 'Veteran',
        type: 'string'
      },
      NonProfit: {
        title: 'NonProfit',
        type: 'string'
      },
      JobsRetained: {
        title: 'JobsRetained',
        type: 'string'
      },
      DateApproved: {
        title: 'DateApproved',
        type: 'date'
      },
      Lender: {
        title: 'Lender',
        type: 'string'
      },
      CD: {
        title: 'CD',
        type: 'string'
      }
    }
  };



  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
}
