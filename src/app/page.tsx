"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Sobre",
          id: "about",
        },
        {
          name: "Serviços",
          id: "services",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="Handheld Digital"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain",
      }}
      title="O seu negócio merece um site profissional. Na palma da sua mão."
      description="Criamos presenças digitais modernas, rápidas e simplistas. Sem complicações, focado em resultados e pronto para converter visitantes em clientes."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-entrepreneur-with-corporate-job-looking-camera-business-office-portrait-young-man-preparing-work-planning-development-industry-with-technology-computer_482257-29387.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/interested-gorgeous-man-with-black-eyes-looking-indoor-photo-fashionable-well-dressed-african-guy-glasses_197531-22079.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-middle-aged-man-with-beard-hairstyle-dressed-elegant-formal-suit-textured-dark-background-studio_613910-19887.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-with-crossed-arms_23-2148095676.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-confident-woman-startup-manager-office-posing-with-confidence-looking_1258-195341.jpg",
          alt: "Client 5",
        },
      ]}
      buttons={[
        {
          text: "Quero o meu site agora",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Design Responsivo",
        },
        {
          type: "text",
          text: "Otimizado para SEO",
        },
        {
          type: "text",
          text: "Performance de Topo",
        },
        {
          type: "text",
          text: "Gestão Intuitiva",
        },
        {
          type: "text",
          text: "Suporte Premium",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Menos ruído, mais impacto."
      description={[
        "Design Minimalista: Sites limpos que focam no que realmente importa: a sua marca.",
        "Performance Total: Páginas ultra-rápidas otimizadas para qualquer dispositivo (desktop, tablet ou telemóvel).",
        "Gestão Simplificada: Tenha o controlo total do seu projeto sem precisar de ser um especialista em tecnologia.",
      ]}
    />
  </div>

  <div id="concept" data-section="concept">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Porquê 'Sites na Palma da Mão'?"
      description={[
        "Acreditamos que a tecnologia deve servir as pessoas, e não o contrário. O nosso conceito baseia-se na entrega de uma solução pronta a usar, onde a complexidade fica connosco e a facilidade de gestão fica consigo.",
        "É ter o seu negócio acessível em qualquer lugar, com um toque de elegância.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Landing Pages",
          description: "Ideais para lançamentos e campanhas de anúncios focadas em conversão rápida.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-smartphone-indoors_23-2149321587.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/hands-holding-downloading-mobile-phone-with-coffee-cup-beverage_53876-16026.jpg",
          buttonText: "Saber mais",
        },
        {
          title: "Sites Institucionais",
          description: "A casa digital da sua empresa com um design premium que transmite confiança.",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-light-trails-blue-tone_1359-645.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/abstract-blurry-background_1048-6216.jpg",
          buttonText: "Saber mais",
        },
        {
          title: "Lojas Online",
          description: "Venda os seus produtos de forma intuitiva e segura, integrando pagamentos facilmente.",
          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/stock-portfolio-computer-monitor-containing-collection-financial-assets_482257-93465.jpg",
          buttonText: "Saber mais",
        },
      ]}
      title="O que entregamos"
      description="Soluções digitais desenhadas para o seu crescimento."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Impacto em números"
      tag="Resultados Comprovados"
      metrics={[
        {
          id: "m1",
          value: "100+",
          description: "Projetos entregues com sucesso",
        },
        {
          id: "m2",
          value: "95%",
          description: "Clientes satisfeitos com a gestão",
        },
        {
          id: "m3",
          value: "2x",
          description: "Melhoria média em performance",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          role: "CEO",
          company: "TechCorp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/image-woman-office-saleswoman-working-with-laptop-sitting-workplace-with-computer_1258-195367.jpg",
        },
        {
          id: "t2",
          name: "Michael Chen",
          role: "CTO",
          company: "InnovateLab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-yellow-jacket_23-2149020794.jpg",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          role: "Marketing Director",
          company: "GrowthCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5687.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          role: "Product Manager",
          company: "StartupXYZ",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-female-supervisor-dressed-elegant-suit-grey-background_613910-1354.jpg",
        },
        {
          id: "t5",
          name: "Ana Silva",
          role: "Founder",
          company: "EcoShop",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/image-handsome-pleased-guy-reads-latest-news-newspaper-records-some-notes-notepad-wears-glasses-t-shirt-enjoys-delicious-croissant-people-working-concept_273609-29627.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Avaliação Média",
        },
        {
          value: "120+",
          label: "Projetos Concluídos",
        },
        {
          value: "24h",
          label: "Tempo Médio de Resposta",
        },
      ]}
      title="O que dizem os nossos parceiros"
      description="Veja porque somos a escolha de dezenas de empreendedores."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Quanto tempo demora o desenvolvimento?",
          content: "Dependendo da complexidade, os projetos costumam levar entre 2 a 4 semanas.",
        },
        {
          id: "f2",
          title: "Vou conseguir gerir o site sozinho?",
          content: "Sim! Entregamos uma plataforma intuitiva e oferecemos suporte para que tenha autonomia total.",
        },
        {
          id: "f3",
          title: "Como funciona o suporte?",
          content: "Oferecemos suporte contínuo para garantir que tudo funcione na perfeição e para futuras atualizações.",
        },
      ]}
      title="Dúvidas Frequentes"
      description="Estamos aqui para ajudar a clarificar qualquer ponto."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Vamos tirar a sua ideia do papel hoje? Junte-se a dezenas de empreendedores que simplificaram a sua presença online conosco."
      buttons={[
        {
          text: "Pedir Orçamento Grátis",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Handheld Digital"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Início",
              href: "#hero",
            },
            {
              label: "Sobre",
              href: "#about",
            },
            {
              label: "Serviços",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidade",
              href: "#",
            },
            {
              label: "Termos",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
