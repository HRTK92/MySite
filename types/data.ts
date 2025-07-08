export interface SkillItem {
    id: string
    src: string
    alt: string
    title: string
    subtitle?: string
}

export interface SkillsData {
    skills: SkillItem[]
    frameworks: SkillItem[]
}

export interface Repository {
    id: string
    name: string
    description: string
    url: string
    icon: string
}

export interface RepositoriesData {
    repositories: Repository[]
    moreUrl: string
}

export interface OSSContribution {
    id: string
    title: string
    url: string
    image: string
    description: string
}

export interface Organization {
    id: string
    name: string
    url: string
    avatar: string
}

export interface OSSData {
    ossContributions: OSSContribution[]
    organizations: Organization[]
}

export interface ZennUser {
    user: {
        id: number
        username: string
        name: string
        avatar_small_url: string
        avatar_url: string
        bio: string
        autolinked_bio: string
        github_username: string
        twitter_username: string | null
        created_at: string
        updated_at: string
        post_liked_count: number
        total_liked_count: number
        publication_follower_count: number
        is_login_user: boolean
        is_friend: boolean
        is_invoice_issuer: boolean
        follower_count: number
        following_count: number
        following_user_count: number
        following_publication_count: number
        badge_count: number
        articles_count: number
        books_count: number
        scraps_count: number
        awards: any[]
    }
}
