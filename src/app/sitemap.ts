import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hrtk92.com' // あなたのドメインに変更してください

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // 他のページがある場合は、ここに追加できます
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
        // {
        //   url: `${baseUrl}/projects`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.5,
        // },
    ]
}
