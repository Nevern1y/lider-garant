import { Metadata } from "next";

/**
 * Генерирует метаданные для страницы на основе H1 заголовка
 */
export function generatePageMetadata(h1Text: string): Metadata {
  // Очищаем текст от лишних пробелов и спецсимволов
  const cleanTitle = h1Text.trim();

  // Генерируем ключевые слова на основе заголовка
  const keywords = cleanTitle
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .join(", ");

  return {
    title: cleanTitle,
    description: `${cleanTitle} — лучшие условия от ЛИДЕР-ГАРАНТ. Быстрое одобрение и выгодные предложения.`,
    keywords: keywords,
    openGraph: {
      title: cleanTitle,
      description: `${cleanTitle} — лучшие условия от ЛИДЕР-ГАРАНТ. Быстрое одобрение и выгодные предложения.`,
      type: "website",
    },
  };
}
