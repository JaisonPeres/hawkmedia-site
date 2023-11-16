import { Main } from '@/components/layout/Main';
import CookieBanner from '@/components/modules/analytics/CookieBanner';

export default async function AboutPage() {

  return (
    <Main>
      <h1 className='text-white'>Sobre</h1>
      <CookieBanner />
    </Main>
  )
}
