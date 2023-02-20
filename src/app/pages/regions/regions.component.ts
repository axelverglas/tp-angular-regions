import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CityModel } from 'src/app/model/CityModel.model';
import { DepModel } from 'src/app/model/DepModel.model';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  public activePage!: string
  public Departements!: DepModel[];
  public error: boolean;
  public showDepartements: boolean;
  public loading: boolean;
  public showCities: boolean;
  public regionName: string
  public Cities!: CityModel[];

  constructor(public toaster: ToastrService, private apiService: apiService){
    this.activePage = 'regions'
    this.Departements = []
    this.regionName = ''
    this.Cities = []
    this.error = false
    this.showDepartements = false
    this.showCities = false
    this.loading = false
  }

  getClickedRegionCode(regionData: any){
    this.getDepartements(regionData.code)
    this.showDepartements = true;
    this.loading = true;
    this.regionName = regionData.name
  }

  getClickedDepartementCode(departementData: any) {
    this.getCities(departementData.code)
    this.showCities = true;
    this.loading = true;
  }

  getCities(code: string) {
    this.apiService.getCity(code).subscribe(
      (data: any) => {
        this.loading = false;
        data.map((city: any) => {
          let unit = new CityModel(city.code, city.nom, city.codeDepartement, city.codeRegion,city.codesPostaux, city.population);
          this.Cities.push(unit);
        })
        this.showCities = true;
        this.error = false;
        this.toaster.success('Données récupérées avec succès');
      },
      (error) => {
        this.loading = false;
        this.error = true;
        this.toaster.error('Erreur lors du chargement des données');
      }
    );
  }

  getDepartements(code: string) {
    this.apiService.getDepartements(code).subscribe(
      (data: any) => {
        this.loading = false;
        data.map((departement: any)=>{

            let unit = new DepModel(departement.code, departement.nom, departement.codeRegion);

            this.Departements.push(unit);

        })
        this.showDepartements = true;
        this.error = false;
        this.toaster.success('Données récupérées avec succès');
      },
      (error) => {
        this.loading = false;
        this.error = true;
        this.toaster.error('Erreur lors du chargement des données');
      }
    );
  }

  goBackRegions() {
    this.showDepartements = false;
    this.showCities = false;
    this.Departements = [];
    this.Cities = [];
  }

  goBackDepartements() {
    this.showCities = false;
    this.Cities = [];
  }
}
