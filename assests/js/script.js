const arrayElementScore = document.getElementsByClassName('score')

for (let i = 0; i < arrayElementScore.length; i++) {
  const element = arrayElementScore[i];
  let html = ''
  for (let j = 0; j < element.attributes.score.value; j++) {
    html += `
      <i class="active far fa-dot-circle"></i>
    `
  }
  for (let j = 0; j < 9 - element.attributes.score.value; j++) {
    html += `
      <i class="far fa-circle"></i>
    `
  }
  element.innerHTML = html;  
}

const mode = document.getElementById('mode')
mode.addEventListener('change', ($e) => {
  if ($e.srcElement.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})