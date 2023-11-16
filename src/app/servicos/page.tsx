import { Main } from '@/components/layout/Main';
import CookieBanner from '@/components/modules/analytics/CookieBanner';

export default async function ServicesPage() {

  return (
    <Main>
      <h1 className='text-white'>Serviços</h1>
      <CookieBanner />
    </Main>
  )
}
