buildExperince()
buildAcademicTraining()
buildReference()
buildContact()
buildSkill()

function getJson(file) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", `./assests/json/${file}.json`, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}
/**
 * EXPERINCE
 */
function buildExperince() {
  const experience = getJson('experience')
  let html = ''
  experience.forEach(e => {
    htmlActivity = ''
    e.activity.forEach(a => {
      htmlActivity += `${a} `
    })
    html += `
      <li>
        <div class="period">${e.period}</div>
        <div class="info">
          <h3 class="business">${e.business}</h3>
          <h4 class="position">${e.position}</h4>
          <p class="activity">${htmlActivity}</p>
        </div>
      </li>
    `
  });
  document.getElementById('experience').innerHTML = html
}
/**
 * ACADEMIC TRAINING
 */
function buildAcademicTraining() {
  const academicTraining = getJson('academic-training')
  let html = ''
  academicTraining.forEach(e => {
    let htmlActivity = ''
    switch (e.type) {
      case 'certificate':
        if (e.by) {
          htmlActivity += `Certificado por ${e.by} - ${e.time}`
        } else {
          htmlActivity += `Certificado - ${e.time}`
        }
        break;
      case 'degree':
        htmlActivity += `Título en - ${e.name}`
        break;
      case 'graduated':
        htmlActivity += `Egresado en - ${e.name}`
        break;
      default:
        break;
    }
    html += `
      <li>
        <div class="period">${e.period}</div>
        <div class="info">
          <h3 class="business">${e.institute}</h3>
          <h4 class="position">${e.subject}</h4>
          <p class="activity">${htmlActivity}</p>
        </div>
      </li>
    `
  });
  document.getElementById('academicTraining').innerHTML = html
}
/**
 * REFERENCE
 */
function buildReference() {
  const reference = getJson('reference')
  let html = ''
  reference.forEach(e => {
    htmlInfo = ''
    e.contact.forEach(c => {
      htmlInfo += `
        <h4 class="position">${c.position}</h4>
        <p class="activity">
        ${c.fullname}<br>${c.email} | ${c.mobile}
        </p>
      `
    })
    html += `
      <li>
        <div class="info">
          <h3 class="business">${e.business}</h3>
          ${htmlInfo}
        </div>
      </li>
    `
  });
  document.getElementById('reference').innerHTML = html
}
/**
 * CONTACT
 */
function buildContact() {
  const contact = getJson('contact')
  let html = ''
  contact.forEach(c => {
    let icon, title = ''
    switch (c.tipe) {
      case 'address':
        title = 'Dirección'
        icon = '<i class="fas fa-map-marker-alt"></i>'
        break;
      case 'email':
        title = 'Correo electrónico'
        icon = '<i class="fas fa-envelope"></i>'
        break;
      case 'mobile':
        title = 'Movíl'
        icon = '<i class="fas fa-mobile-alt"></i>'
        break;
      case 'github':
        title = 'Github'
        icon = '<i class="fab fa-github"></i>'
        break;
      case 'gitlab':
        title = 'Gitlab'
        icon = '<i class="fab fa-gitlab"></i>'
        break;
      case 'platzi':
        title = 'Platzi'
        icon = '<i class="fas fa-graduation-cap"></i>'
        break;
      default:
        break;
    }
    html += `
      <li>
        <div class="icon">${icon}</div>
        <div class="info">
          <h5>${title}</h5>
          <a target="_blank" href="${c.link}">${c.data}</a>
        </div>
      </li>
    `
  });
  document.getElementById('contact').innerHTML = html
}
/**
 * SKILL
 */
function buildSkill() {
  const skill = getJson('skill')
  let html = ''
  skill.forEach(s => {
    htmlGroup = ''
    s.group.forEach(g => {
      let htmlTopic = ''
      g.topic.forEach(t => {
        htmlTopic += `
        <li>
          <div class="technology">${t.subject}</div>
          <div class="score" score="${t.score}"></div>
        </li>
      `
      });
      htmlGroup += `
      <div class="header" title="${g.title}">
        <div class="sub-header">
          <span>Básico</span>
          <span>Intermedio</span>
          <span>Avanzado</span>
        </div>
      </div>
      <ul title="${g.title}">${htmlTopic}</ul>    
      `
    });
    html += `
      <h2>${s.title}</h2>
      ${htmlGroup}
    `
  });
  document.getElementById('skill').innerHTML = html
}

const arrayElementScore = document.getElementsByClassName('score')
for (let i = 0; i < arrayElementScore.length; i++) {
  const element = arrayElementScore[i];
  let html = ''
  for (let j = 0; j < element.attributes.score.value; j++) {
    html += `
      <i class="active far fa-dot-circle"></i>
    `
  }
  for (let j = 0; j < 10 - element.attributes.score.value; j++) {
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