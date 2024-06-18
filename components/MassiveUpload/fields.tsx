import { Fields } from 'react-spreadsheet-import/types/types';

export const productsFields: Fields<unknown> = [
  {
    label: 'Nombre del Producto',
    example: 'Polera',
    key: 'productName',
    alternateMatches: ['nombre', 'productos'],
    fieldType: { type: 'input' },
    editable: true,
    validations: [
      {
        rule: 'required',
        errorMessage: 'La columna "Nombre" es requerida.',
        level: 'error',
      },
    ],
  },
  {
    label: 'Descripción',
    example: 'Polera de algodón',
    key: 'description',
    alternateMatches: ['descripcion', 'Descripcion'],
    fieldType: { type: 'input' },
    validations: [
      {
        rule: 'required',
        errorMessage:
          'La columna "Codigo Identificación Fiscal Compañía" es requerida.',
        level: 'error',
      },
    ],
  },
  {
    label: 'Categoría',
    example: 'Top Crop',
    key: 'category',
    alternateMatches: ['categoria', 'Categoria'],
    fieldType: { type: 'input' },
  },
  {
    label: 'Precio',
    example: '1000',
    key: 'price',
    alternateMatches: ['precio', 'Precio'],
    fieldType: { type: 'input' },
  },
  {
    label: 'Imagen',
    example: 'https://www.example.com/image.jpg',
    key: 'image',
    alternateMatches: ['imagen', 'Imagen'],
    fieldType: { type: 'input' },
  },
  {
    label: 'Tamaño',
    example: 'M',
    key: 'size',
    alternateMatches: ['tamaño', 'Tamaño'],
    fieldType: { type: 'input' },
  },
  {
    label: 'Stock',
    example: '100',
    key: 'stock',
    alternateMatches: ['stock', 'Stock'],
    fieldType: { type: 'input' },
  },
];
