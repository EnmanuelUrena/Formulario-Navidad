document.addEventListener('DOMContentLoaded', () => {
  let checkminor = document.getElementById('minordisplay')
  let btn_check = document.getElementById('minor')

  btn_check.addEventListener('click', () => {
    if(btn_check.checked)
    {
      checkminor.style.display = 'block';
    }
    else{
      checkminor.style.display = 'none';
    }
  })
})