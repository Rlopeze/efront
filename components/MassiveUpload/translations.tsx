export const translations = {
  uploadStep: {
    title: 'Carga tu archivo',
    manifestTitle: 'Datos que esperamos:',
    manifestDescription:
      '(Tendrás la oportunidad de renombrar o eliminar columnas en los siguientes pasos)',
    maxRecordsExceeded: (maxRecords: string) =>
      `Demasiados registros. Hasta ${maxRecords} permitidos`,
    csvFileName: 'carga_productos.csv',
    downloadCSVButtonTitle: 'Descargar Plantilla',
    dropzone: {
      title: 'Sube un archivo .xlsx, .xls o .csv',
      errorToastDescription: 'subida rechazada',
      activeDropzoneTitle: 'Suelta el archivo aquí...',
      buttonTitle: 'Selecciona un archivo',
      loadingTitle: 'Procesando...',
    },
    selectSheet: {
      title: 'Selecciona la hoja a utilizar',
      nextButtonTitle: 'Siguiente',
      backButtonTitle: 'Atrás',
    },
  },
  selectHeaderStep: {
    title: 'Selecciona la fila de encabezado',
    nextButtonTitle: 'Siguiente',
    backButtonTitle: 'Atrás',
  },
  matchColumnsStep: {
    title: 'Empareja las columnas',
    nextButtonTitle: 'Siguiente',
    backButtonTitle: 'Atrás',
    userTableTitle: 'Tu tabla',
    templateTitle: 'Se convertirá en',
    selectPlaceholder: 'Selecciona una columna...',
    ignoredColumnText: 'Columna ignorada',
    subSelectPlaceholder: 'Selecciona...',
    matchDropdownTitle: 'Emparejar',
    unmatched: 'Sin emparejar',
    duplicateColumnWarningTitle: 'Otra columna sin seleccionar',
    duplicateColumnWarningDescription: 'Las columnas no pueden duplicarse',
  },
  validationStep: {
    title: 'Valida los datos',
    nextButtonTitle: 'Confirmar',
    backButtonTitle: 'Atrás',
    noRowsMessage: 'No se encontraron datos',
    noRowsMessageWhenFiltered: 'No se encontraron datos con errores',
    discardButtonTitle: 'Descartar filas seleccionadas',
    filterSwitchTitle: 'Mostrar solo filas con errores',
  },
  alerts: {
    confirmClose: {
      headerTitle: 'Salir del flujo de importación',
      bodyText: '¿Estás seguro? Tu información actual no se guardará.',
      cancelButtonTitle: 'Cancelar',
      exitButtonTitle: 'Salir del flujo',
    },
    submitIncomplete: {
      headerTitle: 'Se detectaron errores',
      bodyText:
        'Todavía hay algunas filas que contienen errores. Las filas con errores se ignorarán al enviar.',
      bodyTextSubmitForbidden:
        'Todavía hay algunas filas que contienen errores.',
      cancelButtonTitle: 'Cancelar',
      finishButtonTitle: 'Enviar',
    },
    unmatchedRequiredFields: {
      headerTitle: 'No todas las columnas coincidieron',
      bodyText:
        'Hay columnas requeridas que no coinciden o se ignoran. ¿Quieres continuar?',
      listTitle: 'Columnas no coincidentes:',
      cancelButtonTitle: 'Cancelar',
      continueButtonTitle: 'Continuar',
    },
    toast: {
      error: 'Error',
    },
  },
};
