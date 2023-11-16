
const site = {
  title: 'Hawk Media',
  description: 'Vídeos e fotos aéreas com drones',
  url: 'hawkmedia.com.br',
  brand: 'my-site.com/brand.png',
  meta: {
    title: 'Hawk Media',
    description: 'Vídeos e fotos aéreas com drones',
    keywords: 'drone, fotografia, vídeos',
  }
}

class useMetadataHook {
  public async getSiteMetadata() {

    const isLocal = process.env.STAGE === 'local'

    if(!site) return console.error('Site data not found')

    return {
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
      title: (site.title || site.meta.title) + (isLocal ? ' - Local' : ''),
      description: site.title || site.meta.description,
      url: `https://${site.url}`,
      keywords: site.meta.keywords,
      openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: `https://${site.url}`,
        title: site.title,
        description: site.description,
        image: site.brand,
      }
    };
  }
}

const useMetadata = new useMetadataHook()
export default useMetadata