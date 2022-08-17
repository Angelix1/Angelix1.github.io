function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function botInvite() {
  window.location.href = `https://discord.com/api/oauth2/authorize?client_id=827096460376932374&permissions=1632826158289&scope=bot%20applications.commands`;
}
