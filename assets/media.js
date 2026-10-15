/* Builds the photo gallery, YouTube videos and contact social icons
   from content.js. Runs before app.js so its filters/tabs work. */
(function(){
  const C = window.SITE_CONTENT || {};
  const photos = Array.isArray(C.photos) ? C.photos.filter(p => p && p.file) : [];
  const videos = Array.isArray(C.videos) ? C.videos.filter(v => v && v.url) : [];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function youtubeId(url){
    try{
      const u = new URL(String(url).trim());
      const host = u.hostname.toLowerCase();
      if(host.includes('youtu.be')) return u.pathname.replace(/^\/+/, '').split('/')[0].replace(/[^A-Za-z0-9_-]/g,'');
      if(host.includes('youtube.com')){
        const v = u.searchParams.get('v'); if(v) return v.replace(/[^A-Za-z0-9_-]/g,'');
        const m = u.pathname.match(/\/(?:embed|shorts|live)\/([^/?#]+)/); if(m) return m[1].replace(/[^A-Za-z0-9_-]/g,'');
      }
    }catch(e){}
    return '';
  }

  /* ---- Media section ---- */
  const section = document.getElementById('media-library');
  if(section){
    if(!photos.length && !videos.length){
      section.remove();
      document.querySelectorAll('a[href="#media-library"]').forEach(a => (a.closest('li') || a).remove());
    } else {
      // Photo category filters (only categories that are actually used)
      const used = new Set(photos.flatMap(p => Array.isArray(p.categories) ? p.categories : []));
      const toolbar = document.getElementById('gallery-toolbar');
      (C.photoCategories || []).filter(c => used.has(c.slug)).forEach(c => {
        toolbar.insertAdjacentHTML('beforeend', `<button class="gallery-filter" data-gallery-filter="${esc(c.slug)}" type="button">${esc(c.name)}</button>`);
      });

      const gallery = document.getElementById('full-photo-gallery');
      gallery.innerHTML = photos.length ? photos.map(p => `
        <article class="gallery-item" data-gallery-categories="${esc((p.categories || []).join(' '))}">
          <div class="gallery-image-link" aria-hidden="true"><img src="${esc(p.file)}" alt="${esc(p.caption || 'Photo')}" loading="lazy"></div>
          ${p.caption ? `<div class="gallery-caption"><strong>${esc(p.caption)}</strong></div>` : ''}
        </article>`).join('')
        : '<div class="gallery-empty"><div class="gallery-empty-icon">✦</div><h3>Photos coming soon</h3><p>New photos from events and programmes will appear here.</p></div>';

      const vgrid = document.getElementById('video-grid');
      const vcards = videos.map(v => ({...v, id: youtubeId(v.url)})).filter(v => v.id);
      vgrid.innerHTML = vcards.length ? vcards.map(v => `
        <article class="video-card">
          <div class="video-frame"><iframe src="https://www.youtube.com/embed/${esc(v.id)}" title="${esc(v.title || 'YouTube video')}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="video-card-body"><h3>${esc(v.title || '')}</h3>${v.description ? `<p>${esc(v.description)}</p>` : ''}</div>
        </article>`).join('')
        : '<div class="gallery-empty"><div class="gallery-empty-icon">▶</div><h3>Videos coming soon</h3><p>New videos will appear here.</p></div>';

      // If only one kind exists, open that tab first
      if(!photos.length && vcards.length){
        document.querySelectorAll('[data-media-tab]').forEach(t => t.classList.toggle('active', t.dataset.mediaTab === 'videos'));
        document.getElementById('media-panel-photos').classList.remove('active');
        document.getElementById('media-panel-videos').classList.add('active');
      }
    }
  }

  /* ---- Contact social icons ---- */
  const socials = C.socials || {};
  document.querySelectorAll('.contact-social-icon').forEach(a => {
    const key = a.dataset.social;
    const url = (socials[key] || '').trim();
    if(url){
      a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.classList.add('has-link');
    } else {
      a.remove();
    }
  });
})();
