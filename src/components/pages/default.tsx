import useSite from '@/hooks/useSite'
import { redirect } from 'next/navigation'
import useModule from '@/hooks/useModule'
import { Main } from '../layout/Main'
import { ModuleNames } from '@/hooks/types'
import CookieBanner from '../modules/analytics/CookieBanner'

interface DefaultPageProps {
  path: string
  showTitle?: boolean
}

export default async function DefaultPage({ path, showTitle }: DefaultPageProps) {

  const page = await useSite.fetchPage(path)

  if (!page) redirect('/not-found')

  return (
    <Main>
      {showTitle && <h1 className="text-white"> {page.title} </h1>}

      {page.modules.map((moduleOnPage) =>
        useModule.render({
          name: moduleOnPage.module.name,
          params: moduleOnPage.params
        })
      )}
      
      {page.sections
        .sort((a, b) => a.indexOnPage - b.indexOnPage)
        .map((section, index) => (
        <div key={index}>
          {section.modules.map((moduleOnSection) =>
            useModule.render({
              name: moduleOnSection.module.name,
              params: moduleOnSection.params
            })
          )}
        </div>
      ))}

      <CookieBanner />
    </Main>
  )
}
