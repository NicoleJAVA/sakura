export default function (response, api = '') {
  if (!response.data.success) {
    if (response.data.message) {
      console.error(`Failed to call API: ${api}. `, response.data.message);
    }

    return false;
  }

  return true;
}
