/* ================================================================
   SILVANA LIMA NAILS — MAIN.JS
   ================================================================
   Instruções:
   - Edite apenas as seções marcadas com "EDITÁVEL" para alterar
     comportamentos como mensagens de formulário, textos, etc.
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------
  // MENU MOBILE + BACKDROP
  // --------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle')
  const mainNav   = document.getElementById('mainNav')
  const navBackdrop = document.getElementById('navBackdrop')

  const openMenu = () => {
    mainNav.classList.add('header__nav--open')
    navBackdrop.classList.add('header__backdrop--visible')
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    mainNav.classList.remove('header__nav--open')
    navBackdrop.classList.remove('header__backdrop--visible')
    document.body.style.overflow = ''
  }

  if (menuToggle && mainNav && navBackdrop) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('header__nav--open')
      isOpen ? closeMenu() : openMenu()
    })

    // Fecha ao clicar no backdrop
    navBackdrop.addEventListener('click', closeMenu)

    // Fecha ao clicar em um link
    mainNav.querySelectorAll('.header__nav-link').forEach(link => {
      link.addEventListener('click', closeMenu)
    })
  }


  // --------------------------------------------------------------
  // SEÇÃO ATIVA (destaca o link conforme a seção visível)
  // --------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.header__nav-link')

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'header__nav-link--active',
              link.getAttribute('href') === `#${entry.target.id}`
            )
          })
        }
      })
    }, { threshold: 0.3 })

    sections.forEach(section => observer.observe(section))
  }


  // --------------------------------------------------------------
  // FORMULÁRIO DE CONTATO
  // --------------------------------------------------------------
  const form = document.getElementById('contactForm')

  if (form) {
    /* ------------------------------------------------------------
       EDITÁVEL: URL para onde o formulário será enviado.
       Substitua "#" pela URL do seu backend ou serviço de email.
       Exemplo: "https://formspree.io/f/seudominio"
       Exemplo: "https://api.staticforms.xyz/submit"
       ------------------------------------------------------------ */
    const FORM_ACTION = '#'   // <-- ALTERE AQUI

    /* ------------------------------------------------------------
       EDITÁVEL: Mensagens exibidas para o usuário
       ------------------------------------------------------------ */
    const MSG_SUCESSO = 'Obrigada! Recebemos sua mensagem e em breve entraremos em contato. 💅'
    const MSG_ERRO    = 'Ops! Algo deu errado. Tente novamente ou me chame direto no WhatsApp.'
    const MSG_CAMPOS  = 'Preencha todos os campos obrigatórios.'

    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const nome     = document.getElementById('nome')
      const email    = document.getElementById('email')
      const telefone = document.getElementById('telefone')
      const curso    = document.getElementById('curso')
      const mensagem = document.getElementById('mensagem')

      // Validação simples
      if (!nome.value.trim() || !email.value.trim() || !telefone.value.trim() || !curso.value) {
        alert(MSG_CAMPOS)
        return
      }

      // Desabilita botão para evitar envios duplicados
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true
      btn.textContent = 'Enviando...'

      try {
        // Se não configurou action, simula envio
        if (FORM_ACTION === '#') {
          await new Promise(resolve => setTimeout(resolve, 800))
          alert(MSG_SUCESSO)
          form.reset()
        } else {
          const formData = new FormData(form)
          const response = await fetch(FORM_ACTION, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          })

          if (response.ok) {
            alert(MSG_SUCESSO)
            form.reset()
          } else {
            alert(MSG_ERRO)
          }
        }
      } catch {
        alert(MSG_ERRO)
      } finally {
        btn.disabled = false
        btn.textContent = 'Enviar Mensagem'
      }
    })
  }


  // --------------------------------------------------------------
  // HEADER TRANSPARENTE → SÓLIDO AO ROLAR
  // --------------------------------------------------------------
  const header = document.querySelector('.header')
  const hero = document.getElementById('hero')

  const updateHeader = () => {
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom
      header.classList.toggle('header--solid', heroBottom <= 0)
    }
  }

  window.addEventListener('scroll', updateHeader)
  updateHeader()


  // --------------------------------------------------------------
  // ANIMAÇÕES AO ROLAR (data-animate)
  // --------------------------------------------------------------
  const animateEls = document.querySelectorAll('[data-animate]')

  if (animateEls.length) {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          animObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' })

    animateEls.forEach(el => animObserver.observe(el))
  }

})
