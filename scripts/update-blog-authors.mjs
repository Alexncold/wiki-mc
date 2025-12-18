import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BLOG_DIR = path.join(__dirname, '..', 'blog');
const DEFAULT_AUTHOR = 'monitor_team';

// Process all markdown files in the blog directory
async function updateBlogPosts() {
  try {
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
    let updatedCount = 0;

    for (const file of files) {
      const filePath = path.join(BLOG_DIR, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file has front matter (handle both Unix and Windows line endings)
      if (!content.startsWith('---') && !content.startsWith('---\r\n')) {
        console.log(`Skipping ${file}: No front matter found`);
        continue;
      }

      // Extract front matter (handle both Unix and Windows line endings)
      const frontMatterEnd = content.indexOf('\n---', 3);
      if (frontMatterEnd === -1) {
        console.log(`Skipping ${file}: Invalid front matter format`);
        continue;
      }

      const frontMatter = content.substring(3, frontMatterEnd).trim();
      const restOfContent = content.substring(frontMatterEnd + 4).trimStart();
      
      // Parse front matter lines (handle both Unix and Windows line endings)
      const frontMatterLines = frontMatter.split(/\r?\n/);
      let updatedFrontMatter = [];
      let hasAuthor = false;
      let hasAuthors = false;

      for (const line of frontMatterLines) {
        const trimmedLine = line.trim();
        
        // Handle author field (singular)
        if (trimmedLine.startsWith('author:')) {
          hasAuthor = true;
          // Skip this line, we'll add authors at the end
          continue;
        }
        // Handle authors field (plural)
        else if (trimmedLine.startsWith('authors:')) {
          hasAuthors = true;
          // Skip this line, we'll add authors at the end
          continue;
        }
        
        // Keep all other lines as-is
        updatedFrontMatter.push(line);
      }

      // Add authors field if not present
      if (!hasAuthors) {
        // If there was an author field, replace it with authors
        if (hasAuthor) {
          updatedFrontMatter.push(`authors: ${DEFAULT_AUTHOR}`);
        } else {
          // Add authors field if neither author nor authors was present
          updatedFrontMatter.push(`authors: ${DEFAULT_AUTHOR}`);
        }
      }

      // Rebuild the content (use the same line endings as the original)
      const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';
      const updatedContent = `---${lineEnding}${updatedFrontMatter.join(lineEnding)}${lineEnding}---${lineEnding}${restOfContent}`;
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Updated ${file}`);
      updatedCount++;
    }

    console.log(`\n✅ Successfully updated ${updatedCount} blog posts.`);
  } catch (error) {
    console.error('Error updating blog posts:', error);
    process.exit(1);
  }
}

// Run the script
updateBlogPosts();
