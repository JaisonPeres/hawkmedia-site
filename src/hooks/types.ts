import { CardProps } from "@/components/basic/Card"
import { ButtonProps } from "@/components/basic/button/Button"
import { GoogleAnalyticsProps } from "@/components/modules/analytics/GoogleAnalytics"
import { ContactFabProps } from "@/components/modules/contact/ContactFab"
import { CardGridProps } from "@/components/modules/sections/CardGrid"
import { GenericHTMLProps } from "@/components/modules/sections/GenericHTML"
import { HeroSectionProps } from "@/components/modules/sections/HeroSection"
import { SectionChapterProps } from "@/components/modules/sections/SectionChapter"

export enum SiteStages {
  DEV = 'DEV',
  PROD = 'PROD',
  LOCAL = 'LOCAL'
}

export enum SiteLanguages {
  PT = 'pt-BR',
  EN = 'en-US'
}

export type Language = keyof typeof SiteLanguages

export interface Site {
  title: string
  url: string
  description: string
  brand: string
  brandIcon: string
  brandAlts?: {
    dark?: string
  }
  modules: ModuleOnElement[]
  pages: Page[]
  stage: SiteStages
  lang: Language
  customTheme?: {
    bodyColor: string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    textSecondaryColor: string
    textTertiaryColor: string
  },
  meta: {
    title: string
    description: string
    keywords: string
    image: string
    url: string
  }
}
export interface Module {
  name: ModuleNames
  title: string
  description: string
  icon: string
  thumbnail: string
  categories: string[]
  tags: string[]
  price: number
  beta: boolean
  useCount: number
}

export interface ModuleOnElement {
  title: string
  icon: string,
  showOnNav: boolean
  indexOnNav: number
  params: Record<string, unknown>,
  module: Module
}

export interface Page {
  title: string
  description: string
  meta: Record<string, unknown>,
  icon: string
  path: string
  showOnNav: boolean
  indexOnNav: number
  disallowedRobots: boolean
  private: boolean
  sections: {
    title: string
    description: string
    icon: string
    showOnNav: boolean
    indexOnNav: number
    indexOnPage: number
    params: Record<string, unknown>,
    modules: ModuleOnElement[]
  }[]
  modules: ModuleOnElement[]
  createdAt: string
  updatedAt: string
}

export interface UnknowParams {
  [key: string]: unknown
}

export enum ModuleNames {
  HERO_SECTION = 'Hero Section',
  GOOGLE_ANALYTICS = 'Google Analytics',
  SITE_NOT_FOUND = 'SiteNotFound',
  CONTACT_FAB = 'Contact Fab',
  GENERIC_HTML = 'Generic HTML',
  CARD = 'Card',
  CARD_GRID = 'Card Grid',
  SECTION_CHAPTER = 'Section Chapter',
  NAVIGATION_HIGHLIGHT = 'Navigation Highlight',
}

export interface ModuleData {
  name: ModuleNames;
  params?: Record<string, any>;
}

export interface ModuleComponents {
  [ModuleNames.HERO_SECTION]: React.ComponentType<HeroSectionProps>;
  [ModuleNames.GOOGLE_ANALYTICS]: React.ComponentType<GoogleAnalyticsProps>;
  [ModuleNames.SITE_NOT_FOUND]: React.ComponentType;
  [ModuleNames.CONTACT_FAB]: React.ComponentType<ContactFabProps>;
  [ModuleNames.GENERIC_HTML]: React.ComponentType<GenericHTMLProps>;
  [ModuleNames.CARD]: React.ComponentType<CardProps>;
  [ModuleNames.CARD_GRID]: React.ComponentType<CardGridProps>;
  [ModuleNames.SECTION_CHAPTER]: React.ComponentType<SectionChapterProps>;
  [ModuleNames.NAVIGATION_HIGHLIGHT]: React.ComponentType<ButtonProps>;
}