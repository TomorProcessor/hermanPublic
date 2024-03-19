import { Component } from '@angular/core';
import { DownloadService } from '../download.service';

interface Document {
  name: string;
  formats: string[];
  sizes: number[];
  selected?: boolean[];
  pdfPath?: string[];
}

@Component({
  selector: 'app-for-students',
  templateUrl: './for-students.component.html',
  styleUrls: ['./for-students.component.scss'],
})
export class ForStudentsComponent {
  constructor(private downloadService: DownloadService) {}

  documents: Document[] = [
    {
      name: 'HERMAN OTTÓ KOLLÉGIUM SZERVEZETI ÉS MŰKÖDÉSI SZABÁLYZAT',
      formats: ['doc', 'pdf'],
      sizes: [119, 88.4],
      selected: [false, false],
      pdfPath: [
        '/assets/herman_otto_szmsz.doc',
        '/assets/herman_otto_szmsz.pdf',
      ],
    },
    {
      name: 'A KORONAVÍRUS ELLENI VÉDEKEZÉS ÉRDEKÉBEN HOZOTT RENDKÍVÜLI ELJÁRÁSREND',
      formats: ['pdf'],
      sizes: [298],
      selected: [false],
      pdfPath: ['/assets/covid_hazirend.pdf'],
    },
    {
      name: '"A" ÉPÜLET - ÁLTALÁNOS TUDNIVALÓK',
      formats: ['doc', 'pdf'],
      sizes: [28, 24],
      selected: [false, false],
      pdfPath: [
        '/assets/altalanos_tudnivalok_a.doc',
        '/assets/altalanos_tudnivalok_a.pdf',
      ],
    },
    {
      name: '"A" ÉPÜLET - HÁZIREND',
      formats: ['doc', 'pdf'],
      sizes: [26, 22.5],
      selected: [false, false],
      pdfPath: ['/assets/hazirend_a.doc', '/assets/hazirend_a.pdf'],
    },
    {
      name: '"B" ÉPÜLET - ÁLTALÁNOS TUDNIVALÓK',
      formats: ['doc', 'pdf'],
      sizes: [28, 23.8],
      selected: [false, false],
      pdfPath: [
        '/assets/altalanos_tudnivalok_b.doc',
        '/assets/altalanos_tudnivalok_b.pdf',
      ],
    },
    {
      name: '"B" ÉPÜLET - HÁZIREND',
      formats: ['doc', 'pdf'],
      sizes: [23.5, 21.5],
      selected: [false, false],
      pdfPath: ['/assets/hazirend_b.doc', '/assets/hazirend_b.pdf'],
    },
  ];

  downloadSelected(categoryIndex: number) {
    const selectedDocument = this.documents[categoryIndex];

    if (selectedDocument.selected && selectedDocument.selected.length > 0) {
      selectedDocument.selected.forEach((isSelected, index) => {
        if (isSelected) {
          const format = selectedDocument.formats[index];
          const size = selectedDocument.sizes[index];
          const filename = `${selectedDocument.name}_${format}_${size}KB.${format}`;
          const downloadLink = selectedDocument.pdfPath
            ? selectedDocument.pdfPath[index]
            : '';

          this.downloadService
            .downloadFile(downloadLink)
            .subscribe((blob: Blob) => {
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });
        }
      });
    } else {
      console.log('Nincs kijelölt formátum.');
    }
  }
}
