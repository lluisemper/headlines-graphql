const newspapers = [
  {
    newspaper: '20-minutos',
    url: 'https://www.20minutos.es/',
    path: 'h1 a[id="m242-241-243"]',
    country: 'es-ES'
  },
  {
    newspaper: 'el-confidencial',
    url: 'https://www.elconfidencial.com/',
    path: 'h2 a',
    country: 'es-ES'
  },
  {
    newspaper: 'el-mundo-today',
    url: 'https://www.elmundotoday.com/',
    path: 'h3.entry-title  a',
    country: 'es-ES'
  },
  {
    newspaper: 'el-mundo',
    url: 'https://www.elmundo.es/',
    path: 'div.ue-l-cover-grid__block div.size6of12 div.ue-l-cover-grid__unit article.ue-c-cover-content div.ue-c-cover-content__body div.ue-c-cover-content__main header.ue-c-cover-content__headline-group a.ue-c-cover-content__link h2.ue-c-cover-content__headline',
    country: 'es-ES'
  },
  {
    newspaper: 'el-pais',
    url: 'https://elpais.com/',
    path: 'h2.headline a',
    country: 'es-ES'
  },
  {
    newspaper: 'el-periodico',
    url: 'https://www.elperiodico.com/es/',
    path: 'section.blockpad h2.fs3 a',
    country: 'es-ES'
  },
  {
    newspaper: 'expansion',
    url: 'https://www.expansion.com/',
    path: 'li.ue-c-cover-content__related-link a',
    country: 'es-ES'
  },
  {
    newspaper: 'la-vanguardia',
    url: 'https://www.lavanguardia.com/',
    path: 'section.breakingnews div.col-xs-12 article.tpl-story-first div.story-bottom header.story-header h1.story-header-title a.story-header-title-link',
    country: 'es-ES'
  },
  {
    newspaper: 'the-guardian',
    url: 'https://www.theguardian.com/international',
    path: '.fc-item__container a.js-headline-text',
    country: 'en-GB'
  },
  {
    newspaper: 'morning-start',
    url: 'https://morningstaronline.co.uk/',
    path: 'section.second h1',
    country: 'en-GB'
  },
  {
    newspaper: 'evening-standard',
    url: 'https://www.standard.co.uk/?CMP=ILC-refresh',
    path: '.hero-top h2',
    country: 'en-GB'
  },
  {
    newspaper: 'bbc-news',
    url: 'https://www.bbc.com/',
    path: 'li.media-list__item--1 a.media__link',
    country: 'en-GB'
  },
  {
    newspaper: 'nu',
    url: 'https://www.nu.nl/',
    path: 'h1.title.fluid',
    country: 'nl-NL'
  },
  {
    newspaper: 'nos',
    url: 'https://www.nos.nl/',
    path: 'h2.title_h8Vn8Zh4',
    country: 'nl-NL'
  },
  {
    newspaper: 'nrc',
    url: 'https://www.nrc.nl/',
    path: 'h3.nmt-item__headline',
    country: 'nl-NL'
  },
  {
    newspaper: 'telegraaf',
    url: 'https://www.telegraaf.nl/',
    path: 'h2.TeaserHeadline__text.TopStoryTeaser__teaserHeadline.TopStoryTeaser__teaserHeadline--big',
    country: 'nl-NL'
  }
];

exports.newspapers = newspapers
