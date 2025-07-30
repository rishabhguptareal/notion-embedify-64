
/**
 * Validates if a URL is a valid Notion page URL
 */
export const isValidNotionUrl = (url: string): boolean => {
  if (!url) return false;
  
  try {
    const parsedUrl = new URL(url);
    
    // Check if the URL is from Notion domains
    return (
      parsedUrl.hostname === 'notion.so' ||
      parsedUrl.hostname === 'www.notion.so' ||
      parsedUrl.hostname.endsWith('.notion.site')
    );
  } catch (error) {
    return false;
  }
};

/**
 * Converts a Notion URL to an embeddable URL if needed
 */
export const getEmbeddableNotionUrl = (url: string): string => {
  if (!isValidNotionUrl(url)) return '';
  
  try {
    const parsedUrl = new URL(url);
    
    // If it's already a notion.site URL, it's likely already embeddable
    if (parsedUrl.hostname.endsWith('.notion.site')) {
      return url;
    }
    
    // For notion.so URLs, we need to ensure it's publicly accessible
    // This is a simplification as some notion.so URLs might require conversion to notion.site
    return url;
  } catch (error) {
    return '';
  }
};

/**
 * Generates HTML embed code for a Notion page
 */
export const generateEmbedCode = (
  url: string, 
  options: { width: string; height: string; hideOutline?: boolean }
): string => {
  if (!isValidNotionUrl(url)) return '';
  
  const embeddableUrl = getEmbeddableNotionUrl(url);
  
  if (!embeddableUrl) return '';
  
  return `<iframe 
  src="${embeddableUrl}" 
  width="${options.width}" 
  height="${options.height}" 
  frameborder="0" 
  allowfullscreen
  ${options.hideOutline ? 'style="border: none;"' : ''}
></iframe>`;
};

/**
 * Extracts a title from a Notion URL for display purposes
 */
export const extractNotionPageTitle = (url: string): string => {
  if (!isValidNotionUrl(url)) return '';
  
  try {
    const parsedUrl = new URL(url);
    
    // Get the path segments
    const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment);
    
    // If there are segments, use the last one (often contains page title)
    if (pathSegments.length > 0) {
      // Convert dashes to spaces and capitalize words
      return pathSegments[pathSegments.length - 1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    return 'Notion Page';
  } catch (error) {
    return 'Notion Page';
  }
};
