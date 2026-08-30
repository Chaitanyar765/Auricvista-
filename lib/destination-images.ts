export type DestinationImageResult = {
  url: string
  title?: string
}

const WIKIMEDIA_API = 'https://commons.wikimedia.org/w/api.php'

function fallbackImage(name: string, region: string, index = 1) {
  const query = encodeURIComponent(`${name}, ${region}, India`)
  return `https://loremflickr.com/${index === 1 ? 1600 : 900}/${index === 1 ? 1000 : 650}/${query}?lock=${encodeURIComponent(`${name}-${region}-${index}`)}`
}



// One real-world visual anchor for each State/UT. These search phrases are
// used only against Wikimedia Commons at runtime; they are NOT stored in MySQL.
const REGION_IMAGE_SEARCH: Record<string, string> = {
  'Andhra Pradesh': 'Andhra Pradesh India Tirumala Tirupati',
  'Arunachal Pradesh': 'Arunachal Pradesh Tawang Monastery India',
  'Assam': 'Assam India Kaziranga Brahmaputra',
  'Bihar': 'Bihar India Mahabodhi Bodh Gaya',
  'Chhattisgarh': 'Chhattisgarh India Chitrakote Falls',
  'Goa': 'Goa India Baga Beach Panaji',
  'Gujarat': 'Gujarat India Rann of Kutch Ahmedabad',
  'Haryana': 'Haryana India Kurukshetra',
  'Himachal Pradesh': 'Himachal Pradesh India Manali mountains',
  'Jharkhand': 'Jharkhand India Hundru Falls Ranchi',
  'Karnataka': 'Karnataka India Hampi Mysore',
  'Kerala': 'Kerala India Alleppey backwaters',
  'Madhya Pradesh': 'Madhya Pradesh India Khajuraho',
  'Maharashtra': 'Maharashtra India Gateway of India Mumbai',
  'Manipur': 'Manipur India Loktak Lake',
  'Meghalaya': 'Meghalaya India Shillong living root bridge',
  'Mizoram': 'Mizoram India Aizawl hills',
  'Nagaland': 'Nagaland India Kohima hills',
  'Odisha': 'Odisha India Konark Sun Temple',
  'Punjab': 'Punjab India Golden Temple Amritsar',
  'Rajasthan': 'Rajasthan India Jaipur Amber Fort',
  'Sikkim': 'Sikkim India Gangtok Himalayas',
  'Tamil Nadu': 'Tamil Nadu India Meenakshi Temple Madurai',
  'Telangana': 'Telangana India Charminar Hyderabad',
  'Tripura': 'Tripura India Ujjayanta Palace Agartala',
  'Uttar Pradesh': 'Uttar Pradesh India Taj Mahal Agra',
  'Uttarakhand': 'Uttarakhand India Kedarnath Himalayas',
  'West Bengal': 'West Bengal India Victoria Memorial Kolkata',
  'Andaman and Nicobar Islands': 'Andaman Nicobar India Radhanagar Beach',
  'Chandigarh': 'Chandigarh India Capitol Complex',
  'Dadra and Nagar Haveli and Daman and Diu': 'Daman Diu India beach',
  'Delhi': 'Delhi India India Gate',
  'Jammu and Kashmir': 'Jammu Kashmir India Dal Lake Srinagar',
  'Ladakh': 'Ladakh India Pangong Lake',
  'Lakshadweep': 'Lakshadweep India Agatti island',
  'Puducherry': 'Puducherry India promenade beach',
}

export async function getRegionImage(
  name: string,
): Promise<DestinationImageResult> {
  const search = REGION_IMAGE_SEARCH[name] ?? `${name}, India tourism`
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: search,
    gsrnamespace: '6',
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '1200',
    format: 'json',
    origin: '*',
  })

  try {
    const response = await fetch(`${WIKIMEDIA_API}?${params.toString()}`, {
      next: { revalidate: 86400 },
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) throw new Error(`Wikimedia returned ${response.status}`)

    const data = await response.json() as {
      query?: {
        pages?: Record<string, {
          title?: string
          imageinfo?: Array<{ thumburl?: string; url?: string }>
        }>
      }
    }

    const first = Object.values(data.query?.pages ?? {})
      .map((page) => {
        const info = page.imageinfo?.[0]
        const url = info?.thumburl || info?.url
        return url ? { url, title: page.title } : null
      })
      .find((item): item is DestinationImageResult => Boolean(item))

    if (first) return first
  } catch {
    // Use the deterministic fallback below when Wikimedia is unavailable.
  }

  return {
    url: fallbackImage(name, name, 1),
    title: `${name} state/UT photo`,
  }
}

export async function getDestinationImages(
  name: string,
  region: string,
  count = 4,
): Promise<DestinationImageResult[]> {
  const search = `${name}, ${region}, India`
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: search,
    gsrnamespace: '6',
    gsrlimit: String(Math.max(count, 4)),
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '1600',
    format: 'json',
    origin: '*',
  })

  try {
    const response = await fetch(`${WIKIMEDIA_API}?${params.toString()}`, {
      next: { revalidate: 86400 },
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) throw new Error(`Wikimedia returned ${response.status}`)

    const data = await response.json() as {
      query?: {
        pages?: Record<string, {
          title?: string
          imageinfo?: Array<{ thumburl?: string; url?: string }>
        }>
      }
    }

    const images = Object.values(data.query?.pages ?? {})
      .map((page) => {
        const info = page.imageinfo?.[0]
        return info?.thumburl || info?.url
          ? { url: info.thumburl || info.url!, title: page.title }
          : null
      })
      .filter((item): item is DestinationImageResult => Boolean(item))
      .slice(0, count)

    if (images.length >= count) return images

    const fallbacks = Array.from({ length: count - images.length }, (_, i) => ({
      url: fallbackImage(name, region, i + images.length + 1),
      title: `${name} destination photo`,
    }))

    return [...images, ...fallbacks]
  } catch {
    return Array.from({ length: count }, (_, i) => ({
      url: fallbackImage(name, region, i + 1),
      title: `${name} destination photo`,
    }))
  }
}
