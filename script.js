const menuBtn=document.getElementById('menuBtn');const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('senderName').value.trim();const em=document.getElementById('senderEmail').value.trim();const m=document.getElementById('message').value.trim();const s=encodeURIComponent('Portfolio inquiry from '+n);const b=encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\n'+m);location.href='mailto:rhubayno@gmail.com?subject='+s+'&body='+b;});

// Portfolio video gallery: load the selected preview into the large featured player.
const featuredVideo = document.getElementById('featuredPortfolioVideo');
if (featuredVideo) {
  const videoTitle = document.getElementById('featuredVideoTitle');
  const videoDescription = document.getElementById('featuredVideoDescription');
  document.querySelectorAll('.video-thumb').forEach(button => {
    button.addEventListener('click', () => {
      const wasPlaying = !featuredVideo.paused;
      featuredVideo.pause();
      featuredVideo.src = button.dataset.src;
      featuredVideo.poster = button.dataset.poster;
      featuredVideo.load();
      if (videoTitle) videoTitle.textContent = button.dataset.title || '';
      if (videoDescription) videoDescription.textContent = button.dataset.description || '';
      document.querySelectorAll('.video-thumb').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      // Selecting a thumbnail loads the chosen clip; the visitor presses Play in the large player.
      if (wasPlaying) featuredVideo.play().catch(() => {});
    });
  });
}
