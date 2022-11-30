const toastLiveExample = document.getElementById('liveToast')

function liveToast(){
  const toast = new bootstrap.Toast(toastLiveExample)

  toast.show()
}