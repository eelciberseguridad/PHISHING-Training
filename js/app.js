(function(){
'use strict';

var STORAGE = {
  questions:'eel_phishing_v5_questions',
  config:'eel_phishing_v5_config',
  results:'eel_phishing_v5_results'
};
var LEGACY_STORAGE = {
  questions:'eel_phishing_v4_questions',
  config:'eel_phishing_v4_config',
  results:'eel_phishing_v4_results'
};
var DEFAULT_CONFIG={
  examLength:20,
  passScore:70,
  description:'¿Qué harías en cada situación?'
};
var ACCESS_HASH=0xceb76fe8;
var questions=[];
var config={};
var results=[];
var quiz=[];
var quizIndex=0;
var selectedAnswer=null;
var answersLog=[];
var participant='';
var page=1;
var pageSize=12;
var pendingImage='';
var confirmAction=null;
var currentResultDetail=null;

function $(id){return document.getElementById(id)}
function qsa(selector){return Array.prototype.slice.call(document.querySelectorAll(selector))}
function deepCopy(obj){return JSON.parse(JSON.stringify(obj))}
function escapeHtml(value){return String(value == null ? '' : value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]})}
function fnv1a(str){var h=0x811c9dc5;for(var i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,0x01000193)}return h>>>0}
function validPassword(value){return fnv1a(String(value||'').trim())===ACCESS_HASH}
function shuffle(arr){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function nowText(iso){try{return new Date(iso).toLocaleString('es-AR')}catch(e){return iso}}
function makeId(prefix){return prefix+'_'+Date.now()+'_'+Math.floor(Math.random()*1000000)}
function storageGet(key,fallback){try{var raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch(e){return fallback}}
function storageSet(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(e){toast('No se pudo guardar. Puede haberse alcanzado el límite del navegador.');return false}}
function saveQuestions(){return storageSet(STORAGE.questions,questions)}
function saveConfig(){return storageSet(STORAGE.config,config)}
function saveResults(){return storageSet(STORAGE.results,results)}

function migrateQuestionBank(oldBank){
  var fresh=deepCopy(window.DEFAULT_QUESTIONS||[]);
  if(!Array.isArray(oldBank))return fresh;

  oldBank.forEach(function(oldQ){
    if(!oldQ||!oldQ.id)return;
    var builtIn=fresh.find(function(q){return q.id===oldQ.id});
    if(builtIn){
      // Conserva únicamente la imagen que el administrador haya agregado.
      // El texto base se actualiza a la versión pedagógica más reciente.
      if(oldQ.image)builtIn.image=oldQ.image;
    }else{
      // Las preguntas creadas por el administrador se conservan completas.
      fresh.push(deepCopy(oldQ));
    }
  });
  return fresh;
}

function loadData(){
  var savedQuestions=storageGet(STORAGE.questions,null);
  if(Array.isArray(savedQuestions)&&savedQuestions.length){
    questions=savedQuestions;
  }else{
    var legacyQuestions=storageGet(LEGACY_STORAGE.questions,null);
    questions=migrateQuestionBank(legacyQuestions);
  }

  var savedConfig=storageGet(STORAGE.config,null);
  if(!savedConfig){savedConfig=storageGet(LEGACY_STORAGE.config,{})}
  config={
    examLength:Number(savedConfig.examLength)||DEFAULT_CONFIG.examLength,
    passScore:Number(savedConfig.passScore)>=0?Number(savedConfig.passScore):DEFAULT_CONFIG.passScore,
    description:savedConfig.description||DEFAULT_CONFIG.description
  };
  if(config.examLength>questions.length){config.examLength=questions.length}

  var savedResults=storageGet(STORAGE.results,null);
  if(!savedResults){savedResults=storageGet(LEGACY_STORAGE.results,[])}
  results=Array.isArray(savedResults)?savedResults:[];
  results.forEach(function(r){
    if(!r.id)r.id=makeId('resultado');
    if(typeof r.pass==='undefined')r.pass=Number(r.percent)>=Number(r.passScore||config.passScore);
  });

  saveQuestions();saveConfig();saveResults();
  $('homeDescription').textContent=config.description;
}
function toast(message){var el=$('toast');el.textContent=message;el.classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(function(){el.classList.add('hidden')},2600)}
function showView(id){qsa('.view').forEach(function(v){v.classList.add('hidden')});$(id).classList.remove('hidden');$('logoutBtn').classList.toggle('hidden',id!=='viewAdmin');window.scrollTo(0,0)}
function home(){showView('viewHome');$('participantName').value='';$('adminPassword').value='';hideError('participantLoginError');hideError('adminLoginError')}
function showError(id,message){var el=$(id);el.textContent=message;el.classList.remove('hidden')}
function hideError(id){$(id).classList.add('hidden')}

function buildQuiz(){
  var count=Math.max(1,Math.min(Number(config.examLength)||20,questions.length));
  quiz=shuffle(questions).slice(0,count).map(function(q){
    var answers=q.answers.map(function(text,index){return {text:text,correct:index===Number(q.correct)}});
    var copy=deepCopy(q);copy.shuffledAnswers=shuffle(answers);return copy;
  });
  quizIndex=0;selectedAnswer=null;answersLog=[];
}
function startQuiz(name){participant=name;buildQuiz();$('quizUser').textContent=participant;showView('viewQuiz');renderQuestion()}
function renderQuestion(){
  var q=quiz[quizIndex];selectedAnswer=null;
  $('quizCounter').textContent='Pregunta '+(quizIndex+1)+' de '+quiz.length;
  $('progressBar').style.width=((quizIndex)/quiz.length*100)+'%';
  $('questionCategory').textContent='Situación';
  $('questionScenario').textContent=q.scenario||'';
  $('questionText').textContent=q.question||'';
  var img=$('questionImage');if(q.image){img.src=q.image;img.classList.remove('hidden')}else{img.removeAttribute('src');img.classList.add('hidden')}
  var list=$('answerList');list.innerHTML='';
  q.shuffledAnswers.forEach(function(a,index){
    var b=document.createElement('button');b.type='button';b.className='answer-btn';b.textContent=a.text;b.addEventListener('click',function(){
      selectedAnswer=index;qsa('.answer-btn').forEach(function(x){x.classList.remove('selected')});b.classList.add('selected');$('nextQuestion').disabled=false;$('answerHint').textContent='Respuesta seleccionada.';
    });list.appendChild(b);
  });
  $('nextQuestion').disabled=true;$('answerHint').textContent='Elegí una respuesta.';$('nextQuestion').textContent=quizIndex===quiz.length-1?'Finalizar':'Siguiente';
}
function answerCurrent(){
  if(selectedAnswer===null)return;
  var q=quiz[quizIndex];var chosen=q.shuffledAnswers[selectedAnswer];var correctText='';
  q.shuffledAnswers.forEach(function(a){if(a.correct)correctText=a.text});
  answersLog.push({
    questionId:q.id||'',
    category:q.category||'',
    scenario:q.scenario||'',
    question:q.question||'',
    chosen:chosen.text,
    correct:chosen.correct,
    correctText:correctText,
    explanation:q.explanation||''
  });
  quizIndex++;
  if(quizIndex<quiz.length){renderQuestion()}else{finishQuiz()}
}
function feedback(percent){
  if(percent>=90)return 'Excelente desempeño. Reconocés con claridad señales relevantes y tomás decisiones de verificación antes de actuar.';
  if(percent>=75)return 'Muy buen resultado. Tenés un criterio sólido para analizar situaciones de riesgo. Revisá los puntos fallados para reforzar detalles.';
  if(percent>=60)return 'Buen punto de partida. Identificás varias señales importantes, aunque todavía hay situaciones que conviene reforzar antes de actuar.';
  return 'Conviene reforzar los criterios básicos de detección. Revisá especialmente identidad, enlaces, urgencia, códigos, adjuntos y solicitudes inusuales.';
}
function renderReviewHtml(answerList){
  var html='';
  if(!Array.isArray(answerList)||!answerList.length){return '<div class="empty-detail">Esta evaluación fue realizada con una versión anterior y no contiene el detalle de cada respuesta.</div>'}
  answerList.forEach(function(r,i){
    html+='<div class="review-item">'+
      '<div class="'+(r.correct?'status-ok':'status-bad')+'">'+(r.correct?'✓ Correcta':'✕ A revisar')+'</div>'+
      '<h3>'+(i+1)+'. '+escapeHtml(r.question)+'</h3>'+
      (r.scenario?'<p class="saved-scenario"><strong>Situación:</strong> '+escapeHtml(r.scenario)+'</p>':'')+
      '<p><strong>Respuesta elegida:</strong> '+escapeHtml(r.chosen)+'</p>'+
      (r.correct?'':'<p><strong>Respuesta correcta:</strong> '+escapeHtml(r.correctText)+'</p>')+
      '<p>'+escapeHtml(r.explanation||'')+'</p>'+
    '</div>';
  });
  return html;
}
function finishQuiz(){
  var correct=answersLog.filter(function(x){return x.correct}).length;
  var total=answersLog.length;
  var percent=Math.round(correct/total*100);
  var record={
    id:makeId('resultado'),
    date:new Date().toISOString(),
    name:participant,
    percent:percent,
    correct:correct,
    total:total,
    passScore:Number(config.passScore),
    pass:percent>=Number(config.passScore),
    answers:deepCopy(answersLog)
  };
  results.unshift(record);saveResults();

  $('resultGreeting').textContent='Evaluación completada, '+participant;
  $('resultScore').textContent=percent+'%';
  $('resultCorrect').textContent=correct;
  $('resultWrong').textContent=total-correct;
  $('resultTotal').textContent=total;
  var passText=record.pass?' Alcanzaste el criterio de aprobación configurado.':' Todavía no alcanzaste el criterio de aprobación configurado.';
  $('resultMessage').textContent=feedback(percent)+passText;
  $('reviewList').innerHTML=renderReviewHtml(answersLog);
  $('reviewList').classList.add('hidden');
  showView('viewResult')
}

function openAdmin(){renderQuestions();renderSettings();renderResults();showView('viewAdmin')}
function switchTab(name){
  qsa('.nav-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-tab')===name)});
  $('tabQuestions').classList.toggle('hidden',name!=='questions');
  $('tabSettings').classList.toggle('hidden',name!=='settings');
  $('tabResults').classList.toggle('hidden',name!=='results');
  if(name==='questions')renderQuestions();if(name==='settings')renderSettings();if(name==='results')renderResults()
}
function renderQuestions(){
  var term=$('questionSearch').value.trim().toLowerCase();
  var filtered=questions.filter(function(q){return ((q.category||'')+' '+(q.scenario||'')+' '+(q.question||'')).toLowerCase().indexOf(term)>=0});
  var pages=Math.max(1,Math.ceil(filtered.length/pageSize));if(page>pages)page=pages;if(page<1)page=1;
  var rows=filtered.slice((page-1)*pageSize,page*pageSize);var html='';
  rows.forEach(function(q){
    html+='<tr><td>'+escapeHtml(q.category||'')+'</td><td>'+escapeHtml(q.question||'')+'</td><td>'+(q.image?'Sí':'—')+'</td><td><div class="table-actions"><button class="mini-btn edit-question" data-id="'+escapeHtml(q.id)+'" type="button">Editar</button><button class="mini-btn delete delete-question" data-id="'+escapeHtml(q.id)+'" type="button">Eliminar</button></div></td></tr>'
  });
  if(!rows.length)html='<tr><td colspan="4">No hay coincidencias.</td></tr>';
  $('questionsTable').innerHTML=html;$('pageInfo').textContent='Página '+page+' de '+pages;$('prevPage').disabled=page<=1;$('nextPage').disabled=page>=pages;
  qsa('.edit-question').forEach(function(b){b.addEventListener('click',function(){editQuestion(b.getAttribute('data-id'))})});
  qsa('.delete-question').forEach(function(b){b.addEventListener('click',function(){askDeleteQuestion(b.getAttribute('data-id'))})});
}
function openQuestionModal(q){
  pendingImage=q&&q.image?q.image:'';
  $('editId').value=q?q.id:'';
  $('editCategory').value=q?q.category:'';
  $('editScenario').value=q?q.scenario:'';
  $('editQuestion').value=q?q.question:'';
  $('editAnswer0').value=q?q.answers[0]:'';
  $('editAnswer1').value=q?q.answers[1]:'';
  $('editAnswer2').value=q?q.answers[2]:'';
  $('editCorrect').value=q?String(q.correct):'0';
  $('editExplanation').value=q?q.explanation:'';
  $('editImage').value='';
  $('questionModalTitle').textContent=q?'Editar pregunta':'Nueva pregunta';
  renderImagePreview();$('questionModal').classList.remove('hidden')
}
function closeQuestionModal(){$('questionModal').classList.add('hidden')}
function renderImagePreview(){if(pendingImage){$('imagePreview').src=pendingImage;$('imageEditorBox').classList.remove('hidden')}else{$('imagePreview').removeAttribute('src');$('imageEditorBox').classList.add('hidden')}}
function editQuestion(id){var q=questions.find(function(x){return x.id===id});if(q)openQuestionModal(q)}
function saveQuestion(event){
  event.preventDefault();
  var id=$('editId').value||makeId('q');
  var item={
    id:id,
    category:$('editCategory').value.trim(),
    scenario:$('editScenario').value.trim(),
    question:$('editQuestion').value.trim(),
    answers:[$('editAnswer0').value.trim(),$('editAnswer1').value.trim(),$('editAnswer2').value.trim()],
    correct:Number($('editCorrect').value),
    explanation:$('editExplanation').value.trim(),
    image:pendingImage
  };
  var index=questions.findIndex(function(q){return q.id===id});if(index>=0)questions[index]=item;else questions.push(item);
  if(saveQuestions()){closeQuestionModal();renderQuestions();toast('Pregunta guardada.')}
}
function askDeleteQuestion(id){showConfirm('Eliminar pregunta','La pregunta se quitará del banco.',false,function(){questions=questions.filter(function(q){return q.id!==id});if(config.examLength>questions.length)config.examLength=Math.max(1,questions.length);saveQuestions();saveConfig();renderQuestions();toast('Pregunta eliminada.')})}
function renderSettings(){$('examLength').value=config.examLength;$('passScore').value=config.passScore;$('trainingDescription').value=config.description}
function saveSettings(event){
  event.preventDefault();
  var length=Math.max(1,Number($('examLength').value)||20);
  if(length>questions.length){toast('La evaluación no puede tener más preguntas que el banco disponible.');return}
  config.examLength=length;
  config.passScore=Math.max(0,Math.min(100,Number($('passScore').value)||0));
  config.description=$('trainingDescription').value.trim()||DEFAULT_CONFIG.description;
  if(saveConfig()){$('homeDescription').textContent=config.description;toast('Configuración guardada.')}
}

function renderResults(){
  var html='';
  results.forEach(function(r){
    html+='<tr>'+
      '<td>'+escapeHtml(nowText(r.date))+'</td>'+
      '<td>'+escapeHtml(r.name)+'</td>'+
      '<td><strong>'+Number(r.percent)+'%</strong></td>'+
      '<td>'+Number(r.correct)+' / '+Number(r.total)+'</td>'+
      '<td><div class="table-actions"><button class="mini-btn view-result" data-id="'+escapeHtml(r.id)+'" type="button">Ver detalle</button><button class="mini-btn delete delete-result" data-id="'+escapeHtml(r.id)+'" type="button">Eliminar</button></div></td>'+
    '</tr>'
  });
  if(!results.length)html='<tr><td colspan="5">Todavía no hay resultados.</td></tr>';
  $('resultsTable').innerHTML=html;
  qsa('.view-result').forEach(function(b){b.addEventListener('click',function(){openResultDetail(b.getAttribute('data-id'))})});
  qsa('.delete-result').forEach(function(b){b.addEventListener('click',function(){deleteResult(b.getAttribute('data-id'))})});
}
function openResultDetail(id){
  var r=results.find(function(x){return x.id===id});
  if(!r)return;
  currentResultDetail=r;
  $('resultDetailName').textContent=r.name;
  $('resultDetailMeta').innerHTML=
    '<div><span>Fecha</span><strong>'+escapeHtml(nowText(r.date))+'</strong></div>'+
    '<div><span>Resultado</span><strong>'+Number(r.percent)+'%</strong></div>'+
    '<div><span>Correctas</span><strong>'+Number(r.correct)+' / '+Number(r.total)+'</strong></div>'+
    '<div><span>Estado</span><strong>'+(r.pass?'Aprobado':'A revisar')+'</strong></div>';
  $('resultDetailList').innerHTML=renderReviewHtml(r.answers);
  $('resultDetailModal').classList.remove('hidden');
}
function closeResultDetail(){$('resultDetailModal').classList.add('hidden');currentResultDetail=null}
function deleteResult(id){
  var r=results.find(function(x){return x.id===id});
  if(!r)return;
  showConfirm('Eliminar evaluación','Se eliminará el resultado guardado de '+r.name+'.',false,function(){
    results=results.filter(function(x){return x.id!==id});
    saveResults();renderResults();toast('Evaluación eliminada.')
  })
}
function clearResults(){showConfirm('Borrar resultados','Se eliminará todo el historial guardado en este navegador.',true,function(){results=[];saveResults();renderResults();toast('Resultados eliminados.')})}

function showConfirm(title,text,needPassword,action){
  confirmAction=action;$('confirmTitle').textContent=title;$('confirmText').textContent=text;
  $('confirmPasswordLabel').classList.toggle('hidden',!needPassword);
  $('confirmPassword').value='';$('confirmError').classList.add('hidden');
  $('confirmModal').classList.remove('hidden');
  $('confirmAccept').setAttribute('data-need-password',needPassword?'1':'0')
}
function closeConfirm(){$('confirmModal').classList.add('hidden');confirmAction=null}
function acceptConfirm(){
  var need=$('confirmAccept').getAttribute('data-need-password')==='1';
  if(need&&!validPassword($('confirmPassword').value)){showError('confirmError','Clave incorrecta.');return}
  var fn=confirmAction;closeConfirm();if(typeof fn==='function')fn()
}
function downloadFile(name,content,type){
  var blob=new Blob([content],{type:type||'application/octet-stream'});
  var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=name;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(url)},800)
}
function exportQuestions(){downloadFile('EEL_Phishing_Preguntas.json',JSON.stringify(questions,null,2),'application/json;charset=utf-8')}
function importQuestions(file){
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(){
    try{
      var data=JSON.parse(reader.result);
      if(!Array.isArray(data)||!data.length)throw new Error();
      data.forEach(function(q){if(!q.id||!q.question||!Array.isArray(q.answers)||q.answers.length!==3||Number(q.correct)<0||Number(q.correct)>2)throw new Error()});
      questions=data;if(config.examLength>questions.length)config.examLength=questions.length;
      saveQuestions();saveConfig();page=1;renderQuestions();toast('Banco importado correctamente.')
    }catch(e){toast('El archivo no es un banco de preguntas válido.')}
    finally{$('importQuestionsInput').value=''}
  };
  reader.readAsText(file,'utf-8')
}
function csvCell(value){return '"'+String(value==null?'':value).replace(/"/g,'""')+'"'}
function resultRows(records){
  var rows=[['ID evaluación','Fecha','Participante','Porcentaje','Estado','Nº','Categoría','Situación','Pregunta','Respuesta elegida','Resultado','Respuesta correcta','Explicación']];
  records.forEach(function(r){
    if(Array.isArray(r.answers)&&r.answers.length){
      r.answers.forEach(function(a,i){
        rows.push([r.id,r.date,r.name,r.percent,r.pass?'Aprobado':'A revisar',i+1,a.category,a.scenario,a.question,a.chosen,a.correct?'Correcta':'A revisar',a.correctText,a.explanation])
      })
    }else{
      rows.push([r.id,r.date,r.name,r.percent,r.pass?'Aprobado':'A revisar','','','','','','','', 'Sin detalle: evaluación realizada con una versión anterior.'])
    }
  });
  return rows
}
function exportResults(){
  var csv=resultRows(results).map(function(row){return row.map(csvCell).join(';')}).join('\r\n');
  downloadFile('EEL_Phishing_Resultados_Detallados.csv','\uFEFF'+csv,'text/csv;charset=utf-8')
}
function exportOneResult(){
  if(!currentResultDetail)return;
  var safeName=String(currentResultDetail.name||'participante').replace(/[\\/:*?"<>|]+/g,'_').replace(/\s+/g,'_');
  var csv=resultRows([currentResultDetail]).map(function(row){return row.map(csvCell).join(';')}).join('\r\n');
  downloadFile('EEL_Phishing_'+safeName+'_'+String(currentResultDetail.date||'').slice(0,10)+'.csv','\uFEFF'+csv,'text/csv;charset=utf-8')
}
function readImage(file){
  if(!file)return;
  if(!/^image\/(png|jpeg|webp)$/i.test(file.type)){toast('Usá una imagen JPG, PNG o WEBP.');$('editImage').value='';return}
  if(file.size>650*1024){toast('La imagen es demasiado pesada. Usá una imagen menor a 650 KB.');$('editImage').value='';return}
  var r=new FileReader();r.onload=function(){pendingImage=r.result;renderImagePreview()};r.readAsDataURL(file)
}

$('openParticipant').addEventListener('click',function(){showView('viewParticipantLogin');setTimeout(function(){$('participantName').focus()},0)});
$('openAdmin').addEventListener('click',function(){showView('viewAdminLogin');setTimeout(function(){$('adminPassword').focus()},0)});
qsa('[data-home]').forEach(function(b){b.addEventListener('click',home)});
$('brandHome').addEventListener('click',home);$('logoutBtn').addEventListener('click',home);
qsa('[data-toggle-password]').forEach(function(b){b.addEventListener('click',function(){var input=$(b.getAttribute('data-toggle-password'));input.type=input.type==='password'?'text':'password'})});

$('participantLoginForm').addEventListener('submit',function(e){
  e.preventDefault();hideError('participantLoginError');
  var name=$('participantName').value.trim();
  if(name.length<3){showError('participantLoginError','Ingresá tu nombre y apellido.');return}
  startQuiz(name)
});
$('adminLoginForm').addEventListener('submit',function(e){
  e.preventDefault();hideError('adminLoginError');
  if(!validPassword($('adminPassword').value)){showError('adminLoginError','Clave incorrecta.');return}
  openAdmin()
});

$('nextQuestion').addEventListener('click',answerCurrent);
$('toggleReview').addEventListener('click',function(){$('reviewList').classList.toggle('hidden')});
$('finishParticipant').addEventListener('click',home);

qsa('.nav-btn').forEach(function(b){b.addEventListener('click',function(){switchTab(b.getAttribute('data-tab'))})});
$('questionSearch').addEventListener('input',function(){page=1;renderQuestions()});
$('prevPage').addEventListener('click',function(){page--;renderQuestions()});
$('nextPage').addEventListener('click',function(){page++;renderQuestions()});
$('newQuestionBtn').addEventListener('click',function(){openQuestionModal(null)});
$('closeQuestionModal').addEventListener('click',closeQuestionModal);
$('cancelQuestionBtn').addEventListener('click',closeQuestionModal);
$('questionForm').addEventListener('submit',saveQuestion);
$('editImage').addEventListener('change',function(){readImage(this.files&&this.files[0])});
$('removeImageBtn').addEventListener('click',function(){pendingImage='';$('editImage').value='';renderImagePreview()});
$('settingsForm').addEventListener('submit',saveSettings);
$('clearResultsBtn').addEventListener('click',clearResults);
$('exportQuestionsBtn').addEventListener('click',exportQuestions);
$('importQuestionsInput').addEventListener('change',function(){importQuestions(this.files&&this.files[0])});
$('exportResultsBtn').addEventListener('click',exportResults);
$('closeResultDetail').addEventListener('click',closeResultDetail);
$('exportOneResultBtn').addEventListener('click',exportOneResult);
$('confirmCancel').addEventListener('click',closeConfirm);
$('confirmAccept').addEventListener('click',acceptConfirm);

$('questionModal').addEventListener('click',function(e){if(e.target===$('questionModal'))closeQuestionModal()});
$('resultDetailModal').addEventListener('click',function(e){if(e.target===$('resultDetailModal'))closeResultDetail()});
$('confirmModal').addEventListener('click',function(e){if(e.target===$('confirmModal'))closeConfirm()});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    if(!$('questionModal').classList.contains('hidden'))closeQuestionModal();
    else if(!$('resultDetailModal').classList.contains('hidden'))closeResultDetail();
    else if(!$('confirmModal').classList.contains('hidden'))closeConfirm()
  }
});

loadData();home();
})();
