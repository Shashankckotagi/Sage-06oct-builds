const fs = require('fs');
const readline = require('readline');

async function parseTeamFromXML() {
  const filePath = 'shastryassociates.WordPress.2026-07-30.xml';
  const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let inItem = false;
  let itemLines = [];
  const items = [];

  for await (const line of rl) {
    if (line.includes('<item>')) {
      inItem = true;
      itemLines = [line];
    } else if (line.includes('</item>') && inItem) {
      itemLines.push(line);
      inItem = false;
      const itemContent = itemLines.join('\n');
      
      // Skip menu items, attachments, trash, revision
      if (
        !itemContent.includes('<wp:post_type><![CDATA[nav_menu_item]]></wp:post_type>') &&
        !itemContent.includes('<wp:status><![CDATA[trash]]></wp:status>') &&
        !itemContent.includes('<wp:post_type><![CDATA[revision]]></wp:post_type>') &&
        !itemContent.includes('<wp:post_type><![CDATA[attachment]]></wp:post_type>')
      ) {
        const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/s) || itemContent.match(/<title>(.*?)<\/title>/s);
        const postTypeMatch = itemContent.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/s) || itemContent.match(/<wp:post_type>(.*?)<\/wp:post_type>/s);
        const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s);
        
        const title = titleMatch ? titleMatch[1].trim() : '';
        const postType = postTypeMatch ? postTypeMatch[1].trim() : '';
        const content = contentMatch ? contentMatch[1].trim() : '';

        // Check if title or content has team, faculty, bio, or people names
        const lower = (title + ' ' + content).toLowerCase();
        if (
          lower.includes('team') ||
          lower.includes('faculty') ||
          lower.includes('shastry') ||
          lower.includes('member') ||
          lower.includes('founder') ||
          lower.includes('adviser') ||
          lower.includes('advisor') ||
          lower.includes('director') ||
          lower.includes('professor') ||
          lower.includes('dr.') ||
          lower.includes('ph.d') ||
          lower.includes('bio') ||
          postType.includes('team') ||
          postType.includes('faculty') ||
          postType.includes('member') ||
          postType.includes('person') ||
          postType.includes('staff')
        ) {
          items.push({
            title,
            postType,
            contentSnippet: content.replace(/<[^>]*>?/gm, ' ').substring(0, 300).replace(/\s+/g, ' '),
            fullContent: content,
            rawItem: itemContent
          });
        }
      }
    } else if (inItem) {
      itemLines.push(line);
    }
  }

  const targetIDs = ['261', '281', '285', '289', '293', '297', '303', '355', '7771', '7773', '7781', '7783', '7846', '1409', '1412'];
  
  const teamBios = {};

  items.forEach((it) => {
    const isTarget = targetIDs.some(id => it.rawItem.includes(`<wp:post_id>${id}</wp:post_id>`) || it.rawItem.includes(`<wp:post_parent>${id}</wp:post_parent>`));
    
    if (isTarget || it.title.includes('Dr.') || it.title.includes('Prof.')) {
      const name = it.title || 'Unknown';
      if (!teamBios[name]) {
        teamBios[name] = {
          title: name,
          postType: it.postType,
          texts: [],
          images: []
        };
      }

      // Check for base64 encoded mfn-page-items or elementor data
      const b64Matches = [...it.rawItem.matchAll(/<wp:meta_value><!\[CDATA\[([A-Za-z0-9+/=]{50,})\]\]><\/wp:meta_value>/g)];
      b64Matches.forEach(m => {
        try {
          const decoded = Buffer.from(m[1], 'base64').toString('utf8');
          // Extract text from decoded string
          const textMatches = [...decoded.matchAll(/s:\d+:"([^"]{20,})"/g)].map(tm => tm[1]);
          textMatches.forEach(txt => {
            if (!txt.includes('http') && !txt.includes('icon-') && !txt.includes('default') && !txt.includes('show') && !txt.includes('hide')) {
              const clean = txt.replace(/<[^>]+>/g, ' ').replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\s+/g, ' ').trim();
              if (clean.length > 25 && !teamBios[name].texts.includes(clean)) {
                teamBios[name].texts.push(clean);
              }
            }
          });

          // Extract image URLs from decoded
          const decodedImgs = [...decoded.matchAll(/https?:\/\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp|gif)/gi)].map(dim => dim[0]);
          decodedImgs.forEach(img => {
            if (!teamBios[name].images.includes(img)) {
              teamBios[name].images.push(img);
            }
          });
        } catch (e) {}
      });

      // Extract image links directly from rawItem
      const imgs = [...it.rawItem.matchAll(/https?:\/\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp|gif)/gi)].map(m => m[0]);
      imgs.forEach(img => {
        if (!teamBios[name].images.includes(img)) {
          teamBios[name].images.push(img);
        }
      });
    }
  });

  console.log(`\n=================== ALL DECODED TEAM MEMBERS ===================`);
  Object.keys(teamBios).forEach(key => {
    console.log(`\n*** MEMBER: ${key} ***`);
    console.log(`Images:`, teamBios[key].images);
    console.log(`Texts:\n`, teamBios[key].texts.join('\n- '));
  });
}

parseTeamFromXML().catch(console.error);
