import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { Company } from '../../../core/models/Company';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-company',
  standalone: false,
  templateUrl: './delete-company.component.html',
  styleUrl: './delete-company.component.css',
})
export class DeleteCompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.adminService.allCompanies().subscribe((comp: Company[]) => {
      this.companies = comp;
    });
  }

  deleteCompany(id: number) {
    this.adminService.deleteCompany(id).subscribe((resp: Boolean) => {
      if (resp) {
        Swal.fire(
          "Compañia eliminada",
          "La compañia se elimino con exito",
          "success"
        )
      } else {
        Swal.fire(
          'Error al eliminar la compañia',
          'Hubo un error al eliminar la compañia',
          'error'
        );
      }
    })
    setTimeout(() => {
      this.getCompanies();
    }, 1000);
  }
}
