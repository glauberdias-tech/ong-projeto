document.addEventListener('input', function(e){
  const el = e.target;
  if(!el) return;
  if(el.id === 'cpf'){
    let v = el.value.replace(/\D/g,'');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    el.value = v;
  }
  if(el.id === 'tel'){
    let v = el.value.replace(/\D/g,'');
    if(v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3');
    else v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3');
    el.value = v;
  }
  if(el.id === 'cep'){
    let v = el.value.replace(/\D/g,'');
    v = v.replace(/^(\d{5})(\d)/,'$1-$2');
    el.value = v;
  }
});
