import Swal from 'sweetalert2';

export const handleConfirm = (textSucces = '') => {
  Swal.fire({
    title: 'Acción Confirmada',
    text: textSucces,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
};

const handleCancel = (textCancel = '') => {
  Swal.fire({
    title: 'Acción cancelada',
    text: 'No se ha confirmado la acción',
    icon: 'error',
    confirmButtonText: 'Aceptar'
  });
};

const handleWarning = (textWarning = '') => {
  Swal.fire({
    title: 'Advertencia',
    text: textWarning,
    icon: 'error',
    confirmButtonText: 'Aceptar'
  });
};

export const handleClick = (text='') => {
  Swal.fire({
    title: 'pero',
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      handleConfirm();
    } else if (result.isDenied) {
      handleCancel();
    }
  });
};