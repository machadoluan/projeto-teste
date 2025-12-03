$(document).ready(function() {
  // ========== HEADER SCROLL EFFECT ==========
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  });

  // ========== MOBILE MENU TOGGLE ==========
  $('.menu-toggle').click(function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });

  // Close mobile menu when clicking a link
  $('.mobile-nav-link').click(function() {
    $('.menu-toggle').removeClass('open');
    $('.mobile-menu').removeClass('open');
  });

  // ========== LANGUAGE DROPDOWN ==========
  let currentLang = 'pt';

  // Desktop dropdown
  $('.lang-btn').click(function(e) {
    e.stopPropagation();
    $('.lang-dropdown').toggleClass('open');
  });

  // Close dropdown when clicking outside
  $(document).click(function() {
    $('.lang-dropdown').removeClass('open');
  });

  // Language selection
  $('.lang-option, .mobile-lang-btn').click(function() {
    const lang = $(this).data('lang');
    currentLang = lang;
    
    // Update active states
    $('.lang-option, .mobile-lang-btn').removeClass('active');
    $(`.lang-option[data-lang="${lang}"], .mobile-lang-btn[data-lang="${lang}"]`).addClass('active');
    
    // Update button text
    $('.lang-btn span').text(lang.toUpperCase());
    
    // Close dropdowns
    $('.lang-dropdown').removeClass('open');
    $('.menu-toggle').removeClass('open');
    $('.mobile-menu').removeClass('open');
  });

  // ========== SMOOTH SCROLL ==========
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800, 'swing');
    }
  });

  // ========== FADE IN ON SCROLL ==========
  function checkFadeIn() {
    $('.fade-in, .interactive-card').each(function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      
      if (elementBottom > viewportTop && elementTop < viewportBottom - 100) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).scroll(checkFadeIn);
  checkFadeIn(); // Initial check

  // ========== INTERACTIVE CARDS ANIMATION ==========
  $('.interactive-card').each(function(index) {
    $(this).css('transition-delay', (index * 0.15) + 's');
  });

  // ========== MODAL FUNCTIONALITY ==========
  const modalData = {
    vida: {
      title: 'A Vida',
      image: 'assets/vida-card-DcOwav3K.jpg',
      content: `
        <p>João Rodrigues de Castelo Branco, conhecido como Amato Lusitano (1511-1568), nasceu em Castelo Branco, Portugal, numa família de cristãos-novos de origem judaica. Desde jovem mostrou excepcional aptidão para os estudos, iniciando a sua formação em Portugal antes de partir para a prestigiada Universidade de Salamanca.</p>
        <p>A sua vida foi marcada pela constante fuga à Inquisição, que perseguia os judeus e cristãos-novos na Península Ibérica. Esta realidade obrigou-o a uma existência itinerante, transformando-o num médico errante que percorreu diversas cidades europeias, sempre em busca de um local onde pudesse praticar medicina e viver a sua fé em paz.</p>
        <p>Apesar das adversidades, Amato Lusitano nunca abandonou a sua dedicação à medicina e à investigação científica, deixando um legado que transcende fronteiras e épocas.</p>
      `
    },
    obra: {
      title: 'A Obra',
      image: 'assets/obra-card-BiooB5aq.jpg',
      content: `
        <p>A obra magna de Amato Lusitano são as "Centúrias de Curas Medicinais" (Curationum Medicinalium Centuriae), uma coleção de sete volumes publicados entre 1551 e 1566, onde documenta mais de 700 casos clínicos que tratou pessoalmente.</p>
        <p>Cada caso é descrito com rigor científico notável para a época: sintomas, diagnóstico, tratamento aplicado e evolução do paciente. Esta metodologia de documentação clínica foi revolucionária e influenciou gerações de médicos.</p>
        <p>Entre as suas contribuições mais significativas está a primeira descrição das válvulas venosas, descoberta fundamental para a compreensão da circulação sanguínea. Também se destacou nos comentários à obra de Dioscórides sobre plantas medicinais, enriquecendo-os com observações próprias e conhecimentos da flora portuguesa e mediterrânica.</p>
      `
    },
    percurso: {
      title: 'O Percurso',
      image: 'assets/percurso-card-CtxuRSMU.jpg',
      content: `
        <p>O percurso geográfico de Amato Lusitano reflete tanto a sua busca por conhecimento como a fuga às perseguições religiosas. Após os estudos em Salamanca, estabeleceu-se em Lisboa, mas a pressão inquisitorial forçou-o a partir para Antuérpia em 1534.</p>
        <p>Nos Países Baixos, ganhou reputação como médico e botânico, antes de se mudar para Ferrara, em Itália, onde serviu na corte dos Este e ensinou na universidade. Posteriormente viveu em Ancona, até que um novo surto de perseguição o obrigou a fugir novamente.</p>
        <p>Os seus últimos anos foram passados em Salónica (atual Grécia), então parte do Império Otomano, onde finalmente pôde viver abertamente como judeu. Ali continuou a exercer medicina até à sua morte em 1568, vítima de uma epidemia de peste enquanto tratava os seus pacientes.</p>
      `
    }
  };

  // Open modal
  $('.interactive-card').click(function() {
    const cardType = $(this).data('card');
    const data = modalData[cardType];
    
    if (data) {
      $('#modal-title').text(data.title);
      $('#modal-image').attr('src', data.image);
      $('#modal-body-content').html(data.content);
      $('.modal-overlay').addClass('open');
      $('body').css('overflow', 'hidden');
    }
  });

  // Close modal
  $('.modal-close, .modal-overlay').click(function(e) {
    if (e.target === this) {
      $('.modal-overlay').removeClass('open');
      $('body').css('overflow', '');
    }
  });

  // Close modal with Escape key
  $(document).keydown(function(e) {
    if (e.key === 'Escape') {
      $('.modal-overlay').removeClass('open');
      $('body').css('overflow', '');
    }
  });

  // Prevent modal content click from closing
  $('.modal-content').click(function(e) {
    e.stopPropagation();
  });
});
