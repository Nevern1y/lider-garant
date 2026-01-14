
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { api } from "../../lib/api";
import { SeoPage } from "../../components/seo/seo-page-editor";

interface Props {
    params: Promise<{
        slug: string[];
    }>;
}

// Helper to construct slug string from array
const getSlugString = (slugArray: string[]) => {
    return slugArray.join("/");
};

async function getSeoPage(slug: string): Promise<SeoPage | null> {
    try {
        // Attempt to fetch the page by slug.
        // We assume the backend accepts the slug path exactly as provided.
        // URL encoding is important for slugs with special characters.
        const response = await api.get<SeoPage>(`/seo/pages/${encodeURIComponent(slug)}/`);
        return response;
    } catch (error) {
        // If 404, return null to trigger notFound()
        if ((error as any).status === 404) {
            return null;
        }
        console.error(`Failed to fetch SEO page for slug: ${slug}`, error);
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug: slugArray } = await params;
    const slug = getSlugString(slugArray);
    const page = await getSeoPage(slug);

    if (!page) {
        return {
            title: "Страница не найдена",
        };
    }

    return {
        title: page.meta_title || page.h1_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        openGraph: {
            title: page.meta_title || page.h1_title,
            description: page.meta_description,
        },
    };
}

export default async function DynamicSeoPage({ params }: Props) {
    const { slug: slugArray } = await params;
    const slug = getSlugString(slugArray);
    const page = await getSeoPage(slug);

    if (!page) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            {/* 
        TODO: Enhanced rendering based on page_type (landing vs product).
        For now, we render the H1 and the main description content.
        If bank_offers need to be displayed, we would need a component for that.
      */}

            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                    {page.h1_title}
                </h1>

                {page.main_description && (
                    <div
                        className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-[#3ce8d1]"
                        dangerouslySetInnerHTML={{ __html: page.main_description }} // Assuming HTML content? Or just text?
                    />
                )}

                {!page.main_description && (
                    <p className="text-slate-400">Нет описания.</p>
                )}
            </div>
        </div>
    );
}
