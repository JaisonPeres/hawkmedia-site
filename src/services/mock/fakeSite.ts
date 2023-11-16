import { ModuleNames, Site, SiteLanguages, SiteStages } from "../../hooks/types";

export const fakeSite: Site = {
  title: 'Site não encontrado',
  url: 'https://onbloc.dev.br/404',
  description: '',
  brand: 'https://media.onbloc.dev.br/onbloc/onbloc_logo_full_color.svg',
  brandIcon: 'https://media.onbloc.dev.br/onbloc/favicon.png',
  brandAlts: {
    dark: 'https://media.onbloc.dev.br/onbloc/onbloc_logo_full_white.svg'
  },
  stage: SiteStages.PROD,
  lang: 'PT',
  modules: [
    {
      title: ModuleNames.CONTACT_FAB,
      icon: '',
      showOnNav: false,
      indexOnNav: 0,
      params: {
        contacts: [
          {
            label: 'whatsapp: 61 98150-0391',
            color: 'green',
            url: 'https://wa.me/+5561981500391'
          },
          {
            label: 'email: contato@onbloc.dev.br',
            color: 'blue',
            url: 'mailto:contato@onbloc.dev.br'
          }
        ]
      },
      module: {
        title: ModuleNames.CONTACT_FAB,
        name: ModuleNames.CONTACT_FAB,
        description: ModuleNames.CONTACT_FAB,
        icon: '',
        thumbnail: '',
        categories: [],
        tags: [],
        price: 0,
        beta: false,
        useCount: 0
      }
    }
  ],
  pages: [
    {
      title: 'Este site não existe',
      description: 'Parece que este site não existe, ou não foi encontrado.',
      meta: {},
      icon: '',
      path: '/',
      showOnNav: false,
      indexOnNav: 0,
      disallowedRobots: false,
      private: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      sections: [
        {
          title: 'Hero Section - Este site não existe',
          description: 'Parece que este site não existe, ou não foi encontrado.',
          icon: '',
          showOnNav: false,
          indexOnNav: 0,
          indexOnPage: 0,
          params: {},
          modules: [
            {
              title: 'Hero Section - Este site não existe',
              icon: '',
              showOnNav: false,
              indexOnNav: 0,
              params: {
                title: 'Este site parece não estar registrado',
                subtitle: 'Caso este site tenha sido registrado e ainda não apareça aqui, entre em contato com nossa equipe de suporte.',
                actions: [
                  {
                    label: 'Conheça a OnBloc',
                    color: 'green',
                    link: 'https://onbloc.dev.br',
                    target: '_self'
                  }
                ]
              },
              module: {
                title: ModuleNames.HERO_SECTION,
                name: ModuleNames.HERO_SECTION,
                description: 'Este site não existe',
                icon: '',
                thumbnail: '',
                categories: [],
                tags: [],
                price: 0,
                beta: false,
                useCount: 0
              }
            }
          ]
        }
      ],
      modules: []
    }
  ],
  meta: {
    title: 'Este site não existe',
    description: 'Parece que este site não existe, ou não foi encontrado.',
    keywords: 'onbloc, site, não, existe, não encontrado, 404, erro, página, não, encontrada',
    image: '',
    url: 'https://onbloc.dev.br/site-nao-encontrado',
  }
}