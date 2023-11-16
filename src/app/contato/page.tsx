import { Main } from '@/components/layout/Main';
import CookieBanner from '@/components/modules/analytics/CookieBanner';

export default async function ContactPage() {

  return (
    <Main>
      <h1 className='text-white'>Contato</h1>
      <CookieBanner />
    </Main>
  )
}
