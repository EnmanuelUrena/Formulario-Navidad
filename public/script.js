function fillData(){
  let main_form = document.forms.main_form;
  let data = {
    'name': main_form.name.value,
    'lastname': main_form.lastname.value,
    'gender': main_form.gender.value,
    'date': main_form.date.value,
    'phone': main_form.phone.value,
    'email': main_form.email.value,
    'idtype': main_form.idtype.value,
    'id': main_form.id.value,
    'minor': main_form.minor.checked
  }
  if (data.minor) {
    data = {
      ...data,
      minors: [
        {
          'id': data.id,
          'name': main_form.mname1.value
        },
        {
          'id': data.id,
          'name': main_form.mname2.value
        },
        {
          'id': data.id,
          'name': main_form.mname3.value
        }

      ]
    }
  }
  return data;
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json();
}

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

  const form = document.getElementById('main_form');
  
  form.addEventListener('submit', async (e) => {
    const data = fillData();
    console.log(data);
    await postData('http://localhost:3000', data);
  })
})