import { ReactText } from 'react';
import { toast } from 'react-toastify';

const appToast = {
  info: (message: string): void => {
    toast.info(message);
  },
  error: (message: string): void => {
    toast.error(message);
  },
  success: (message: string): void => {
    toast.success(message);
  },
  pending: (message: string): ReactText => toast.loading(message),
  remove: (toastId?: ReactText): void => {
    toast.dismiss(toastId);
  },
};

export default appToast;
