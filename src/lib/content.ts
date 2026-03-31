/**
 * Simple YAML frontmatter and content parser
 */
export function parseContent(rawContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);
  
  if (!match) return { metadata: {} as any, contentEn: rawContent, contentZh: '' };
  
  const yaml = match[1];
  const body = match[2];
  
  const metadata = parseYaml(yaml);
  
  const parts = body.split('<!-- split -->');
  const contentEn = parts[0]?.trim() || '';
  const contentZh = parts[1]?.trim() || '';
  
  return { metadata, contentEn, contentZh };
}

function parseYaml(yaml: string) {
  const lines = yaml.split('\n');
  const result: any = {};
  let currentKey = '';
  let currentList: any[] = [];
  let currentListItem: any = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Handle list items
    if (trimmed.startsWith('- ')) {
      if (!currentList) currentList = [];
      if (currentListItem) currentList.push(currentListItem);
      currentListItem = {};
      
      const rest = trimmed.slice(2);
      const colonIndex = rest.indexOf(':');
      if (colonIndex !== -1) {
        const k = rest.slice(0, colonIndex).trim();
        const v = parseValue(rest.slice(colonIndex + 1).trim());
        currentListItem[k] = v;
      }
    } else if (line.startsWith('    ') || line.startsWith('  - ') || (line.startsWith('  ') && currentListItem)) {
      // Handle nested properties in list items
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex !== -1) {
        const k = trimmed.slice(0, colonIndex).trim();
        const v = parseValue(trimmed.slice(colonIndex + 1).trim());
        if (currentListItem) {
          currentListItem[k] = v;
        }
      }
    } else {
      // Handle top-level properties
      if (currentListItem) {
        currentList.push(currentListItem);
        result[currentKey] = currentList;
        currentListItem = null;
        currentList = [];
      }
      
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex !== -1) {
        currentKey = trimmed.slice(0, colonIndex).trim();
        const v = parseValue(trimmed.slice(colonIndex + 1).trim());
        if (v !== undefined && v !== '') {
          result[currentKey] = v;
        }
      }
    }
  }
  
  if (currentListItem) {
    currentList.push(currentListItem);
    result[currentKey] = currentList;
  }
  
  return result;
}

function parseValue(v: string) {
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (!isNaN(Number(v)) && v !== '') return Number(v);
  // Remove quotes if present
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

/**
 * Load all content of a specific type
 */
export function loadAllContent(modules: Record<string, string>) {
  return Object.entries(modules).map(([path, raw]) => {
    const { metadata, contentEn, contentZh } = parseContent(raw);
    return {
      ...metadata,
      contentEn,
      contentZh
    };
  });
}
