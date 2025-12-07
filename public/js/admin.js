/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const deleteResource = async (resource, id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/${resource}/${id}`,
    });

    if (res.status === 204) {
      showAlert(
        'success',
        `${resource.slice(0, -1).toUpperCase()} deleted successfully!`
      );
      window.setTimeout(() => {
        location.reload();
      }, 1000);
    }
  } catch (err) {
    showAlert('error', 'Error deleting resource! Try again.');
  }
};
