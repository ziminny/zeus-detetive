(function () {
  var options = {
  whatsapp: "[+5541991650231]", // Número do WhatsApp
 company_logo_url:
 “//www.webcreative.com.br/themes/webcreative/images/perfil.jpg”, // URL
 com o logo da empresa
  call_to_action: “[MENSAGEM QUE VAI APARECER AO LADO DO ÍCONE]”, // Chamada para ação
  position: “right”, // Posição do widget na página ‘right’ ou ‘left’
  };
  var proto = document.location.protocol, host = “whatshelp.io”, url = proto + “//static.” + host;
  var s = document.createElement(‘script’); s.type = ‘text/javascript’; s.async = true; s.src = url + ‘/widget-send-button/js/init.js’;
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
 var x = document.getElementsByTagName(‘script’)[0];
 x.parentNode.insertBefore(s, x);
 })();